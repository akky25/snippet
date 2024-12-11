import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import styles from "./index.module.css";
import { useEffect, useRef } from "react";

const sections = [
  { id: "section1", title: "Section 1" },
  { id: "section2", title: "Section 2" },
  { id: "section3", title: "Section 3" },
];

export const PlayGround = () => {
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const lastIntersectingSection = useRef<Element | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        console.log(
          "entries",
          entries.map((v) => `${v.target.id} ${v.isIntersecting}`)
        );
        // ビューポート内のセクションを収集
        const visibleSections = entries.filter((entry) => entry.isIntersecting); // 表示中の要素を取得
        if (visibleSections.length > 0) {
          lastIntersectingSection.current?.removeAttribute(
            "data-last-intersection"
          );

          visibleSections[0].target.setAttribute("data-intersecting", "true");
          visibleSections[0].target.setAttribute(
            "data-last-intersection",
            "true"
          );
          lastIntersectingSection.current = visibleSections[0].target;
        }

        const disVisibleSections = entries.filter(
          (entry) => !entry.isIntersecting
        ); // 表示中の要素を取得

        if (
          disVisibleSections.length > 0 &&
          !disVisibleSections[0].isIntersecting
        ) {
          disVisibleSections[0].target.removeAttribute("data-intersecting");
          disVisibleSections[0].target.removeAttribute(
            "data-last-intersection"
          );
        }
      },
      {
        root: null, // ビューポート
        rootMargin: "-20% 0px -80% 0px", // ビューポートの境界からのマージン
        threshold: 0, // 1pxでも表示されていれば検知
      }
    );

    // 各セクションを監視
    Object.values(sectionRefs.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    // クリーンアップ
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className={styles.topBlur} />
      <div className={styles.container}>
        {sections.map((section) => (
          <div
            key={section.id}
            id={section.id}
            // data-intersecting="true"
            // data-last-intersection="true"
            ref={(el) => {
              sectionRefs.current[section.id] = el; // ここではvoidを返す
            }}
          >
            <ArrowLeftIcon />
          </div>
        ))}
      </div>
      {/* <div className={styles.bottomBlur} /> */}
    </>
  );
};
