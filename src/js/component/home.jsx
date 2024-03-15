import React, {useState, useEffect} from "react";
import { createList, deleteList, getList } from "../services.js"


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";



//create your first component
const Home = () => {
	const [inputvalue, setinputvalue] = useState('');
	const [listitem, addlistitem] = useState([])

	useEffect(() => {getList()
		.then(data => {
			addlistitem(data);
		})
		.catch(error => {
			console.log(error)
		})
	}, []);

	const addItemToList = (event) => {if (event.key === 'Enter') {
		const newItem = {
			label: inputvalue,
			done: false
		}
		addlistitem(listitem.concat(newItem));
		setinputvalue('')
		createList(listitem.concat(newItem))
	}}
	const handleCleanTasks = () => {
		deleteList()
		addlistitem([])
	}

	return (
		<div className="container">
			<h1>TODOS</h1>
			<ul>
				<li><input type="text"  
					value={inputvalue} 
					onChange= {(event) => setinputvalue(event.target.value) && addlistitem } 
					onKeyPress = {addItemToList} 
					placeholder="What are you going to do?"></input></li>
				{listitem.map((item, index) => 
				(<li key={index}>{item.label} <i class = "fas fa-trash-alt" 
				onClick={() => 
				addlistitem(
					listitem.filter((t, currentIndex) => index != currentIndex))}></i></li>))}
			</ul>
			<button onClick={handleCleanTasks}>Clean All Tasks</button>
		</div>
	);
	};

export default Home;