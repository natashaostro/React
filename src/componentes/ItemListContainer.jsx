import React, { useState, useEffect } from "react";
import {  collection, getFirestore, getDocs,query,where } from "firebase/firestore";
import { useParams} from "react-router-dom";
import ItemList from "./ItemList";
/*import arrayProductos from "./json/arrayProductos.json";*/

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();

    /* useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(id ? arrayProductos.filter(item => item.categoria === id) : arrayProductos);
            }, 2000)
        });

        promesa.then((data) => {
            setItems(data);
        })
    }, [id]); */

    // Inserto los Productos de mi JSON a FireStore
    /* useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
       
        arrayProductos.forEach((item) => {
            addDoc(itemsCollection, item);
        });
    }, []); */
/*useEffect(()=>{
    const db= getFirestore();
    const agnCollection = collection(db,"agn");
    arrayProductos.forEach((item)=>{
        addDoc(agnCollection,item);
    });

},[]);*/
   
useEffect(()=>{
const db = getFirestore ();
const agnCollection= collection(db,"agn");
const q=query(agnCollection,where("precio","<",200000));
getDocs (q).then((snapShot)=>{
setItems(snapShot.docs.map((doc)=>
    ({id:doc.id, ...doc.data()})
))
});
},[id]);
console.log(items);
    return (
        <div className="container py-5">
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer;