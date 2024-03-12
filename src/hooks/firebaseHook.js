import { useState, useEffect } from "react";
import { getFirestore } from "firebase/firestore";
import app from "../firebase";
import { collection, getDocs } from "firebase/firestore";

function useGetFirestoreDoc() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const db = getFirestore(app);
  const collectionName = "trainingCourses";

  useEffect(() => {
    const unsubscribe = async () => {
      try {
        const colRef = collection(db, collectionName); // Reference to trainingCourses collection
        const querySnapshot = await getDocs(colRef);

        const trainingCourses = [];

        querySnapshot.forEach((doc) => {
          trainingCourses.push(doc.data());
        });

        setData(trainingCourses);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
        console.log(data);
      }
    };

    unsubscribe();

    return () => unsubscribe(); // Cleanup function for unsubscribe
  }, []);

  return { data, loading, error };
}

export default useGetFirestoreDoc;
