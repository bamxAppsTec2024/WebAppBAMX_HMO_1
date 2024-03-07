import { useState, useEffect } from 'react';
import { collectionGroup, getFirestore } from 'firebase/firestore';
import app from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

function useFirestoreDoc() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const db = getFirestore(app);
  const parentCollectionName = "trainingCourses"; 

  useEffect(() => {
    const unsubscribe = async () => {
      try {
        const allSubcollections = [];
        for (const parentId of parentDocIds) {
          const docRef = doc(db, parentCollectionName, parentId);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists) {
            const data = docSnap.data();
            // Assuming data has a field named 'subcollections' that holds subcollection references
            if (data.subcollections) {
              allSubcollections.push(...data.subcollections);
            }
          }
        }
        setSubcollections(allSubcollections);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    unsubscribe();

    return () => unsubscribe(); // Cleanup function for unsubscribe
  }, [db, collectionName]);

  return { data, loading, error };
}

export default useFirestoreDoc;