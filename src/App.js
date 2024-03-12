import { useEffect, useState } from "react";
import "./App.css";
import { Appbar } from "./components/Cimientos para el futuro/Layout/Layout";
import AccordionItems from "./components/Cimientos para el futuro/AccordionItem/AccordionItems";
import useGetFirestoreDoc from "./hooks/firebaseHook";

/*
import app from "./firebase";
import { collection, getFirestore } from 'firebase/firestore';
import { doc, addDoc } from "firebase/firestore";

const pruebaCreateCollection = async function(){
  const db = getFirestore(app);
  await addDoc(collection(db, "trainingCourses"), data[0]);
  await addDoc(collection(db, "trainingCourses"), data[1]);
}
*/

const useGetFirestoreDocLOCAL = () => {
  const data = [
    {
      title: "Nutrición",
      courses: [
        {
          title: "Mesa sana",
          desc: "Lorem ipsum dolor sit amet",
          videos: [
            {
              title: "Introducción",
              youTubeId: "veQcv6JP9PE",
            },
          ],
        },
        {
          title: "Postres nutritivos",
          desc: "Lorem ipsum dolor sit amet",
          videos: [
            {
              title: "Introducción",
              youTubeId: "DlphYPc_HKk",
            },
            {
              title: "Endulzando sin azúcar",
              youTubeId: "DlphYPc_HKk",
            },
          ],
        },
        {
          title: "Postres nutritivos",
          desc: "Lorem ipsum dolor sit amet",
          videos: [
            {
              title: "Introducción",
              youTubeId: "DlphYPc_HKk",
            },
            {
              title: "Conclusión",
              youTubeId: "DlphYPc_HKk",
            },
          ],
        },
        {
          title: "Postres nutritivos",
          desc: "Lorem ipsum dolor sit amet",
          videos: [
            {
              title: "Introducción",
              youTubeId: "DlphYPc_HKk",
            },
            {
              title: "Conclusión",
              youTubeId: "DlphYPc_HKk",
            },
          ],
        },
      ],
    },
    {
      title: "Programación",
      courses: [
        {
          title: "Programación orientada a objetos",
          desc: "Lorem ipsum dolor sit amet",
          videos: [
            {
              title: "¿Qué es la programacion orientada a objetos? - 1",
              youTubeId: "DlphYPc_HKk",
            },
            {
              title: "¿Qué es la programacion orientada a objetos? - 2",
              youTubeId: "DlphYPc_HKk",
            },
            {
              title: "¿Qué es la programacion orientada a objetos? - 3",
              youTubeId: "DlphYPc_HKk",
            },
          ]
        },
        {
          title: "Mesa sana",
          desc: "Lorem ipsum dolor sit amet",
          videos: [
            {
              title: "Introducción",
              youTubeId: "veQcv6JP9PE",
            },
          ],
        }
      ],
    },
  ];

  const loading = false;
  const error = false;

  return { data, loading, error };
};

function App() {
  const { data, loading, error } = useGetFirestoreDocLOCAL();
  // const [courseSearch, setCourseSearch] = useState("");
  // const [filteredDataResult, setFilteredDataResult] = useState([...data]);

  // useEffect(() => {
  //   if (courseSearch == "") setFilteredDataResult([...data]);
  //   else
  //     setFilteredDataResult(
  //       data.filter((category) => {
  //         return (
  //           category.courses.indexOf(
  //             (course) => course.title == courseSearch
  //           ) >= 0
  //         );
  //       })
  //     );
  // }, [courseSearch]);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="App">
      <Appbar title={"Cimientos para el futuro"} />
      <main>
        <form className="d-flex my-2" style={{ width: "30rem" }}>
          <input
            className="form-control me-sm-2"
            type="search"
            placeholder="Nombre del curso"
            // onChange={(event) => setCourseSearch(event.target.value)}
          />
          <button className="btn btn-secondary my-2 my-sm-0" type="button">
            Buscar
          </button>
        </form>
        {data.map((category, indexCategory) => (
          <div className="my-4" key={`category${indexCategory}`}>
            <h2 role="h1" className="text-success">
              {category.title}
            </h2>
            <div
              className="d-flex flex-row flex-wrap"
              style={{ width: "fit-content" }}
            >
              {category.courses.map((course, indexCourse) => (
                <div
                  key={`course${indexCourse}`}
                  className="card border-success mb-3 me-5"
                  style={{ width: "25vw" }}
                >
                  <div className="card-header">Taller {indexCourse + 1}</div>
                  <div className="card-body flex-grow-0">
                    <h4 className="card-title">{course.title}</h4>
                    <p className="card-subtitle text-muted">{course.desc}</p>
                  </div>
                  <ul
                    className="list-group list-group-flush"
                  >
                    <AccordionItems videos={course.videos} />
                    {/* {course.videos.map((video, indexVideo) => (
                      <>
                        <li
                          key={`${video.title + indexVideo}`}
                          className="list-group-item"
                        >
                          {video.title}
                        </li>
                        <AccordionItem title={video.title} uri={video.youTubeId} />
                        <button type="button" class="btn btn-success w-1/2">
                          Success
                        </button>
                      </>
                    ))} */}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
