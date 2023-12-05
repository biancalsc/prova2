import { useWord } from "../../hooks";


export default function List(){
    const {words}  = useWord();

    return (
        <div>
            {
                JSON.stringify(words)
            }
        </div>
    );
}