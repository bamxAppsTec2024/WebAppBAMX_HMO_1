import { useState } from "react";
import app from "../../../firebase";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  const auth = getAuth(app);
  const [user, setUser] = useState(undefined);
  const navigate = useNavigate();

  onAuthStateChanged(auth, function (firebaseUser) {
    if (firebaseUser) {
      setUser(firebaseUser);
    } else {
      setUser(null);
    }
  });

  if (user == undefined) {
    return (
      <>
        <Appbar title={"Cimientos para el futuro"} />
        <h2 role="h1">Cargando...</h2>
      </>
    );
  } else if (!user) {
    navigate("/cimientosparaelfuturo/login");
  }

  // return <h1>TUKIIIIIIIIIIIIIIIIIIIIIIIIIIII {user.email}</h1>;

  return (
    <div>
      <Appbar title={"Cimientos para el futuro"} selected={2}/>
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
                  <ul className="list-group list-group-flush">
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
