import {createContext, useState} from "react";
import Hush from "../assets/img/Hush hush.jpg";
import Hunger from "../assets/img/HungerGames.jpg";
import Vaquero from "../assets/img/ElLibroVaquero.jpg";
import Maze from "../assets/img/MazeRunner.jpg";
import Eternos from "../assets/img/Eternos.jpg";
import Catching from "../assets/img/CatchingFire.jpg";
import Mockingjay from "../assets/img/Mockingjay.jpg";

export const UserContext = createContext();

export const UserContextProvider= ({children}) =>{
    const [isLogued, setIsLogued] = useState(true);


    const [Books,setBooks] =useState([
        {
            id:"1",
            img: Hush,
            tittle: "Hush Hush",
            year:"2009",
            author:"Becca Flitzpatrick"
        },
        {
            id:"2",
            img: Hunger,
            tittle: "Hunger Games",
            year:"2008",
            author:"Suzanne Collins"
        },
        {
            id:"3",
            img: Vaquero,
            tittle: "El libro Vaquero",
            year:"1978",
            author:"Carlos Lopez"
        },
        {
            id:"4",
            img: Maze,
            tittle: "Maze Runner",
            year:"2009",
            author:"James Dashner"
        },
        {
            id:"5",
            img: Eternos,
            tittle: "Eternos",
            year:"2007",
            author:"Kirsten Miller"
        },
        {
            id:"6",
            img: Catching,
            tittle: "Catching Fire",
            year:"2009",
            author:"Kirsten Miller"
        },
        {
            id:"7",
            img: Mockingjay,
            tittle: "Mockingjay",
            year:"2010",
            author:"Kirsten Miller"
        },


        ]
    )

    const agregarBook = (book) =>{
        console.log(book)
        setBooks([...Books,book])
    }
    const editarBook = (book) => {
        const inCart = Books.find(
            (itemInCart) => itemInCart.id === book.id
        );

        if(inCart) {
            console.log(inCart)
            setBooks(
                Books.map((itemInCart) => {
                    if(itemInCart.id === book.id ) {
                        return {...book}

                    }
                    else return itemInCart
                })
            )
        } else {
            setBooks([...Books, {...book, }]);
        }


    }
    console.log(Books)




    return(
        <UserContext.Provider value=
                                  {
                                      {
                                          Books,
                                          setIsLogued,
                                          isLogued,
                                          agregarBook,
                                          editarBook
                                      }
                                  }
        >
            {children}
        </UserContext.Provider>
    )

};

