import { useState, useEffect } from "react";
import app from "../firebase";
import { getFirestore, collection, doc, getDocs, addDoc, setDoc } from "firebase/firestore";

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
      }
    };

    unsubscribe();

    return () => unsubscribe(); // Cleanup function for unsubscribe
  }, []);

  return { data, loading, error };
}

export default useGetFirestoreDoc;

function useGetFirestoreDocIds() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const db = getFirestore(app);
  const collectionName = "trainingCourses";

  const updateDocument = async (docPost) => {
    if (docPost.id === undefined || docPost.id === null) {
      await addDoc(collection(db, collectionName), docPost.data);
    } else {
      await setDoc(doc(db, collectionName, docPost.id), docPost.data);
    }
  };

  useEffect(() => {
    const unsubscribe = async () => {
      try {
        const colRef = collection(db, collectionName); // Reference to trainingCourses collection
        const querySnapshot = await getDocs(colRef);

        const trainingCourses = [];

        querySnapshot.forEach((doc) => {
          trainingCourses.push({ id: doc.id, data: doc.data() });
        });

        setData(trainingCourses);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    unsubscribe();

    return () => unsubscribe(); // Cleanup function for unsubscribe
  }, []);

  return { data, loading, error, updateDocument };
}

export { useGetFirestoreDocIds };
