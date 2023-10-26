import "./buna.css";
import {CiCoffeeBean} from 'react-icons/ci'
import {BiSolidCoffeeBean} from 'react-icons/bi'

export default function Buna(complete) {
  return (
    <>
   {complete.completes === 100? <BiSolidCoffeeBean color= "#583318" size={30} /> : <CiCoffeeBean  color= "#583318" size={30}/> }
    </>
  );
}