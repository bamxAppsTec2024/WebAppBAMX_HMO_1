import styles from "./Admin.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import app from "../../../firebase";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useGetFirestoreDocIds } from "../../../hooks/firebaseHook";
import Appbar from "../../../components/Cimientos para el futuro/Layout/Appbar";

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
          ],
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
        },
      ],
    },
  ];

  const loading = false;
  const error = false;

  return { data, loading, error };
};

const emptyCategory = {
  ref: undefined,
  data: {
    title: "Nueva categoría",
    courses: [
      {
        title: "",
        desc: "",
        videos: [
          {
            title: "",
            youTubeId: "",
          },
        ],
      },
    ],
  },
};
const emptyCourse = {
  title: "Nuevo taller",
  desc: "Lorem ipsum",
  videos: [
    {
      title: "",
      youTubeId: "",
    },
  ],
};
const emptyVideo = {
  title: "Nuevo video",
  youTubeId: "",
};

let isArray = function (a) {
  return !!a && a.constructor === Array;
};
let isObject = function (a) {
  return !!a && a.constructor === Object;
};
const copyArrayObject = (object) => {
  if (isArray(object) || isObject(object))
    return JSON.parse(JSON.stringify(object));
  else return object;
};

export default function Admin() {
  const [user, setUser] = useState(undefined);
  const auth = getAuth(app);
  const navigate = useNavigate();
  const { data, loading, error, updateDocument } = useGetFirestoreDocIds();

  const [newData, setData] = useState([]);
  const [categoryIndex, setCategoryIndex] = useState(null);
  const [displayedCategory, setDisplayedCategory] = useState(null);

  const AdminSignOut = async () => {
    await signOut(auth);
    navigate("/cimientosparaelfuturo");
  };

  const AddNewCategory = () => {
    setData((value) => [...value, copyArrayObject(emptyCategory)]);
  };
  const AddNewCourse = () => {
    setDisplayedCategory((value) => ({
      ...value,
      courses: [...value.courses, copyArrayObject(emptyCourse)],
    }));

    const modifiedCourse = newData.map((category, index) => {
      if (index === categoryIndex)
        return {
          ...category,
          data: {
            ...category.data,
            courses: [...category.data.courses, copyArrayObject(emptyCourse)],
          },
        };
      else return category;
    });

    setData(modifiedCourse);
  };
  const AddNewVideo = (courseIndex) => {
    const modifiedVideos = displayedCategory.courses.map((course, index) => {
      if (index === courseIndex)
        return {
          ...course,
          videos: [...course.videos, copyArrayObject(emptyVideo)],
        };
      else return course;
    });

    setDisplayedCategory((value) => ({
      ...value,
      courses: modifiedVideos,
    }));

    const modifiedCourse = newData.map((category, index) => {
      if (index === categoryIndex)
        return {
          ...category,
          data: {
            ...category.data,
            courses: modifiedVideos,
          },
        };
      else return category;
    });

    setData(modifiedCourse);
  };

  const EditCategory = (
    propKey,
    modValue,
    isCategory,
    isCourse,
    videoCourseIndex,
    videoIndex
  ) => {
    if (isCategory) {
      setData((value) =>
        value.map((doc, index) => {
          if (index === categoryIndex)
            return {
              ...doc,
              ["data"]: { ...doc.data, [propKey]: copyArrayObject(modValue) },
            };
          else return doc;
        })
      );
      setDisplayedCategory((value) => ({
        ...value,
        [propKey]: copyArrayObject(modValue),
      }));
    } else if (isCourse) {
      const modifiedCourse = newData[categoryIndex].data.courses.map(
        (course, index) => {
          if (index === videoCourseIndex)
            return {
              ...course,
              [propKey]: copyArrayObject(modValue),
            };
          else return course;
        }
      );
      setData((value) =>
        value.map((category, index) => {
          if (index === categoryIndex) {
            return {
              ...category,
              ["data"]: {
                ...category.data,
                ["courses"]: copyArrayObject(modifiedCourse),
              },
            };
          } else return category;
        })
      );
      setDisplayedCategory((value) => ({
        ...value,
        ["courses"]: copyArrayObject(modifiedCourse),
      }));
    } else {
      const modifiedVideos = displayedCategory.courses[
        videoCourseIndex
      ].videos.map((video, index) => {
        if (index === videoIndex) return { ...video, [propKey]: modValue };
        else return video;
      });
      const modifiedVideosCourse = displayedCategory.courses.map(
        (course, index) => {
          if (index === videoCourseIndex)
            return {
              ...course,
              videos: copyArrayObject(modifiedVideos),
            };
          else return course;
        }
      );

      // setDisplayedCategory((value) => ({
      //   ...value,
      //   ["courses"]: value.courses.map((course, index) => {
      //     if (index === videoCourseIndex)
      //       return {
      //         ...course,
      //         videos: copyArrayObject(modifiedVideos),
      //       };
      //     else return course;
      //   }),
      // }));

      const modifiedCourse = newData.map((category, index) => {
        if (index === categoryIndex) {
          const mod = {
            ...category,
            data: {
              ...category.data,
              courses: copyArrayObject(modifiedVideosCourse),
            },
          };
          setDisplayedCategory(copyArrayObject(mod.data));
          return mod;
        } else return category;
      });

      setData(modifiedCourse);
    }
  };

  useEffect(() => {
    if (data === undefined || data === null) return;

    setData(copyArrayObject(data));
  }, [data]);

  useEffect(() => {
    setDisplayedCategory(
      categoryIndex === null ? null : newData[categoryIndex].data
    );
  }, [categoryIndex, data]);

  useEffect(() => {
    console.log(newData);
  }, [newData]);

  onAuthStateChanged(auth, function (firebaseUser) {
    if (user !== undefined) return;

    if (firebaseUser) {
      setUser(firebaseUser);
    } else {
      navigate("/cimientosparaelfuturo/login");
    }
  });

  if (user === undefined || loading) {
    return (
      <>
        <Appbar title={"Cimientos para el futuro"} selected={2} />
        <h2 role="h1">Cargando...</h2>
      </>
    );
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <Appbar
        title={"Cimientos para el futuro"}
        selected={2}
        signOutFunc={AdminSignOut}
      />
      <main>
        <div className="container-fluid">
          <div className="row">
            {/* <form className="col-3 d-flex my-2">
              <input
                className="form-control me-sm-2"
                type="search"
                placeholder="Nombre del curso"
              />
              <button className="btn btn-secondary my-2 my-sm-0" type="button">
                Buscar
              </button>
            </form> */}
          </div>
          <div className="my-4 row">
            <h2 role="h1">Seleccione una categoría para comenzar a editar</h2>
          </div>
          <div className="row">
            <div className="col-2">
              {newData.map((category, indexCategory) => (
                <p
                  className={`border-bottom border-success ${
                    styles.ClickableText
                  } ${categoryIndex === indexCategory ? styles.Selected : ""} ${
                    categoryIndex == null ? "mb-3" : ""
                  }`}
                  key={indexCategory}
                  onClick={() =>
                    setCategoryIndex((value) =>
                      indexCategory === value ? null : indexCategory
                    )
                  }
                >
                  {category.data.title}
                </p>
              ))}
              <button
                type="button"
                className="btn btn-info mt-1"
                onClick={AddNewCategory}
              >
                + Añadir categoría
              </button>
            </div>
            <div className="col-10 row">
              <CategoryForm
                categoryIndex={categoryIndex}
                displayedCategory={displayedCategory}
                addNewCourse={AddNewCourse}
                addnewVideo={AddNewVideo}
                editCategory={EditCategory}
                saveChangesToDB={() => updateDocument(newData[categoryIndex])}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function CategoryForm({
  categoryIndex,
  displayedCategory,
  addNewCourse,
  addnewVideo,
  editCategory,
  saveChangesToDB,
}) {
  const [courseIndex, setCourseIndex] = useState(null);
  const [displayedVideos, setDisplayedVideos] = useState(null);

  useEffect(() => {
    setDisplayedVideos(
      courseIndex === null
        ? null
        : displayedCategory.courses[courseIndex].videos
    );
  }, [courseIndex, displayedCategory]);

  useEffect(() => {
    setCourseIndex(null);
    setDisplayedVideos(null);
  }, [categoryIndex]);

  if (displayedCategory === null) {
    return <p>Seleccione una categoría</p>;
  } else {
    return (
      <>
        <div className="col-12">
          <label
            className="col-form-label col-form-label-lg pt-0"
            htmlFor="CategoryTitle"
          >
            Título de la categoría
          </label>
          <div className="d-flex flex-row">
            <input
              className="form-control form-control-lg"
              type="text"
              placeholder="Título de la categoría"
              id="CategoryTitle"
              value={displayedCategory.title}
              onChange={(e) =>
                editCategory("title", e.target.value, true, false, -1, -1)
              }
            />
            <button
              type="button"
              className="btn btn-success ms-4"
              onClick={saveChangesToDB}
            >
              Guardar Cambios
            </button>
            <button type="button" className="btn btn-danger ms-4">
              Eliminar categoría
            </button>
          </div>
        </div>
        <h4 className="my-4 col-6">Talleres</h4>
        <h4 className="my-4 col-6">Videos</h4>
        <div className="col-6 row">
          {displayedCategory.courses.map((course, indexCourse) => (
            <div
              className="col-5 me-4 px-2 mb-4 border border-2 border-primary rounded-3"
              key={indexCourse}
            >
              <div>
                <label
                  className="col-form-label"
                  htmlFor={`courseTitle${indexCourse}`}
                >
                  Titulo
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Título"
                  id={`courseTitle${indexCourse}`}
                  value={course.title}
                  onChange={(e) =>
                    editCategory(
                      "title",
                      e.target.value,
                      false,
                      true,
                      indexCourse,
                      -1
                    )
                  }
                />
              </div>
              <div>
                <label
                  htmlFor={`courseDesc${indexCourse}`}
                  className="form-label mt-2"
                >
                  Descripción
                </label>
                <textarea
                  className="form-control"
                  id={`courseDesc${indexCourse}`}
                  rows="2"
                  value={course.desc}
                  onChange={(e) =>
                    editCategory(
                      "desc",
                      e.target.value,
                      false,
                      true,
                      indexCourse,
                      -1
                    )
                  }
                ></textarea>
              </div>
              <button
                type="button"
                className="btn btn-primary my-2 me-2"
                onClick={() => setCourseIndex(indexCourse)}
              >
                Editar videos
              </button>
              <button type="button" className="btn btn-danger my-2">
                Eliminar taller
              </button>
            </div>
          ))}
          <div className="col-5 me-4 mb-4">
            <button
              type="button"
              className="btn btn-info"
              onClick={addNewCourse}
            >
              + Añadir taller
            </button>
          </div>
        </div>
        <div className="col-6 row border-2 border-start">
          <VideoForm
            displayedVideos={displayedVideos}
            addNewVideo={addnewVideo}
            courseIndex={courseIndex}
            editCategory={editCategory}
          />
        </div>
      </>
    );
  }
}

function VideoForm({
  displayedVideos,
  addNewVideo,
  courseIndex,
  editCategory,
}) {
  if (displayedVideos === null) {
    return <></>;
  } else {
    return (
      <>
        <div className="col-12 row">
          {displayedVideos.map((video, indexVideo) => (
            <div
              key={indexVideo}
              className="col-5 me-4 mb-4 px-2 border border-2 border-warning rounded-3"
            >
              <div>
                <label
                  className="col-form-label"
                  htmlFor={`videoTitle${indexVideo}`}
                >
                  Titulo
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Título"
                  id={`videoTitle${indexVideo}`}
                  value={video.title}
                  onChange={(e) =>
                    editCategory(
                      "title",
                      e.target.value,
                      false,
                      false,
                      courseIndex,
                      indexVideo
                    )
                  }
                />
              </div>
              <div>
                <label
                  htmlFor={`link${indexVideo}`}
                  className="form-label mt-4"
                >
                  ID de video en youtube
                </label>
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Id de youtube"
                  id={`link${indexVideo}`}
                  value={video.youTubeId}
                  onChange={(e) =>
                    editCategory(
                      "youTubeId",
                      e.target.value,
                      false,
                      false,
                      courseIndex,
                      indexVideo
                    )
                  }
                ></input>
              </div>
              <button type="button" className="btn btn-danger my-2">
                Eliminar video
              </button>
            </div>
          ))}
          <div className="col-5 me-4 mb-4">
            <button
              type="button"
              className="btn btn-info my-2"
              onClick={() => addNewVideo(courseIndex)}
            >
              + Añadir video
            </button>
          </div>
        </div>
      </>
    );
  }
}
