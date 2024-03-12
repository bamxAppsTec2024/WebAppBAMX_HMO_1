import { useState } from "react";
import styles from "./AccordionItems.module.css";

function AccordionItems(props) {
  const { videos } = props;

  const [selectedVideoIndex, setSelectedVideoIndex] = useState(null);

  const handleClick = (index) => {
    setSelectedVideoIndex(index === selectedVideoIndex ? null : index);
  };

  return (
    <div className={`${styles.TextContainer} mt-3 px-4`}>
      {videos.map((video, index) => (
        <div
          className={`${styles.ClickableText} ${
            selectedVideoIndex === index ? styles.Selected : ""
          } ${
            selectedVideoIndex == null ? "mb-3" : ""
          }`}
          key={index}
          onClick={() => handleClick(index)}
        >
          {video.title}
        </div>
      ))}
      {videos.map((video, index) => (
        <>
          {index === selectedVideoIndex && (
            <div className={`${styles.YoutubeIframeWrapper} mb-3`} style={{height: "fit-content"}} key={index}>
              <iframe
                className={`${styles.YoutubeIframe} mb-2`}
                title={video.title}
                src={`https://www.youtube.com/embed/${video.youTubeId}`}
                frameborder="0"
                allow="autoplay;"
                allowFullScreen
                style={{ opacity: 1 }} /* Set opacity to 1 when visible */
              ></iframe>
              {index + 1 !== videos.length && (
                <div className="d-flex justify-content-end">
                  <button
                    className="btn btn-success"
                    type="button"
                    onClick={() => setSelectedVideoIndex((value) => value + 1)}
                  >
                    Siguiente
                  </button>
                </div>
              )}
            </div>
          )}
        </>
      ))}
    </div>
  );
  /*const { title, uri } = props;

  const [toogle, setToogle] = useState(false);
  const [showAccordion, setShowAccordion] = useState(false);
  const [collapsing, setCollapsing] = useState(false);

  useEffect(() => {

      setShowAccordion((value) => !value);

  }, [toogle]);

  return (
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingOne">
        <button
          class={`accordion-button ${toogle ? "" : "collapsed"}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded={showAccordion}
          aria-controls="collapseOne"
          onClick={() => setToogle((value) => !value)}
        >
          {title}
        </button>
      </h2>
      <div
        id="collapseOne"
        class={`accordion-collapse ${collapsing ? "collapsing" : "collapse"} ${
          showAccordion ? "show" : ""
        }`}
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
        style={{ height: collapsing ? "200px" : "", transition: "height 2s" }}
      >
        
        <div class="accordion-body">
          <VideoPlayer
            title={title}
            uri={uri}
          />
        </div>
      </div>
    </div>
  );*/
}

// function VideoPlayer(props) {
//   const { uri } = props;
//   return (
//     <iframe
//       className="YoutubeIframe"
//       src={`https://www.youtube.com/embed/${uri}?autoplay=1`}
//       frameborder="0"
//       allow="autoplay;"
//       allowfullscreen
//       style={{ opacity: 1 }} /* Set opacity to 1 when visible */
//     ></iframe>
//   );
// }

export default AccordionItems;
