import logo from "./logo.svg";
import "./App.css";
import { Appbar } from "./Layout/Layout";

// import useFirestoreDoc from "./hooks/firebaseHook";
import app from "./firebase";
import { collection, getFirestore } from 'firebase/firestore';
import { doc, addDoc } from "firebase/firestore";

const data = [
  {
    title: "Nutrición",
    courses: [
      {
        title: "Alimentación balanceada",
        desc: "Lorem ipsum dolor sit amet",
        videos: [
          {
            title:
              "¿Qué es la programacion orientada a objetos? - La mejor explicación en español",
            youTubeId: "DlphYPc_HKk",
          },
          {
            title:
              "¿Qué es la programacion orientada a objetos? - La mejor explicación en español",
            youTubeId: "DlphYPc_HKk",
          },
        ],
      },
      {
        title: "Postres nutritivos",
        desc: "Lorem ipsum dolor sit amet",
        videos: [
          {
            title:
              "¿Qué es la programacion orientada a objetos? - La mejor explicación en español",
            youTubeId: "DlphYPc_HKk",
          },
          {
            title:
              "¿Qué es la programacion orientada a objetos? - La mejor explicación en español",
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
            title:
              "¿Qué es la programacion orientada a objetos? - La mejor explicación en español",
            youTubeId: "DlphYPc_HKk",
          },
          {
            title:
              "¿Qué es la programacion orientada a objetos? - La mejor explicación en español",
            youTubeId: "DlphYPc_HKk",
          },
        ],
      },
    ],
  },
];

function App() {
  const pageTitle = "Simple Webpage"; // Update with dynamic title fetching
  // const { data, loading, error } = useFirestoreDoc();

  // if (loading) {
  //   return <p>Loading...</p>;
  // }
  // if (error) {
  //   return <p>Error: {error.message}</p>;
  // }
  // console.log(data);
  return (
    <div className="App">
      <Appbar title={pageTitle} />
      <main>
        {data.map((category, indexCategory) => (
          <div key={`category${indexCategory}`}>
            <h2 role="h1" className="text-success">
              {category.title}
            </h2>
            {/* <div className="accordion" id={category.title}>
              {category.courses.map((course, indexCourse) => (
                <div className="accordion-item">
                  <h2 className="accordion-header" id={course.title}>
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${indexCourse}`}
                      aria-expanded="false"
                      aria-controls={`collapse${indexCourse}`}
                    >
                      {course.title}
                    </button>
                  </h2>
                  <div
                    id={`collapse${indexCourse}`}
                    className="accordion-collapse collapse"
                    aria-labelledby={course.title}
                    data-bs-parent={`#${category.title}`}
                  >
                    <div className="accordion-body">
                      {course.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div> */}
            {category.courses.map((course, indexCourse) => (
              <div key={`course${indexCourse}`} class="card border-success mb-3" style={{maxWidth: "20rem"}}>
                <div class="card-header">curso {indexCourse + 1}</div>
                <div class="card-body">
                  <h4 class="card-title">{course.title}</h4>
                  <p class="card-text">
                    {course.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </main>
    </div>
  );
}

const pruebaCreateCollection = async function(){
  const db = getFirestore(app);
  await addDoc(collection(db, "trainingCourses"), data[0]);
  await addDoc(collection(db, "trainingCourses"), data[1]);
}

export default App;
