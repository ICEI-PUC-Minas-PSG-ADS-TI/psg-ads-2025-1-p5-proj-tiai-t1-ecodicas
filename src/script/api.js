import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCENLgxn2TTKjIyB9ITGnIS6T_rd5nyPVI",
  authDomain: "ecodicas-eebb4.firebaseapp.com",
  projectId: "ecodicas-eebb4",
  storageBucket: "ecodicas-eebb4.firebasestorage.app",
  messagingSenderId: "784759381630",
  appId: "1:784759381630:web:eb1a20a761d6adfa46022f",
  measurementId: "G-8H5XWC4VPM"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const db = getFirestore(app);



export async function fetchDadosFirestore() {

  try {

    const dicasCollection = collection(db, "dicas");

    const dicasSnapshot = await getDocs(dicasCollection);


    const listaDeDicas = dicasSnapshot.docs.map(doc => ({

      id: doc.id,

      ...doc.data()

    }));


    console.log("Dados buscados do Firestore:", listaDeDicas);

    return listaDeDicas;


  } catch (error) {

    console.error("Erro ao buscar dados do Firestore:", error);

    throw new Error("Não foi possível carregar os dados.");

  }

}

export async function fetchPostById(postId) {

  try {

    const postRef = doc(db, "dicas", postId);

    const postSnapshot = await getDoc(postRef);


    if (postSnapshot.exists()) {

      console.log("Documento encontrado:", postSnapshot.data());


      return { id: postSnapshot.id, ...postSnapshot.data() };

    } else {


      console.log("Nenhum documento encontrado com ID:", postId);

      return null;

    }


  } catch (error) {

    console.error("Erro ao buscar documento com ID:", postId, error);

    throw new Error(`Não foi possível carregar o post com ID: ${postId}`);

  }

}
