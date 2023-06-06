import { firestore } from "./init";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";

export const addUser = async (userId, name, surname) => {
    try{
        await addDoc(collection(firestore, 'users'), {
            uid : userId,
            name : name,
            surname : surname

        });
    }catch (err){
        console.log({err});
    }
};


export const getUserName = async(user) => {
    const q = query(collection(firestore, 'users'), where ("uid", "==", user.uid));
    console.log("szukame");     //cheems
    let ret;
    try {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            ret = doc.data().name;
            console.log("w getUserName " + ret);
           
        });
    } catch (err){
        console.log({err});

    }
    return ret;
   
};