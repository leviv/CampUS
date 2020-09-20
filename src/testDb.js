// import React, { Component } from "react";
// import { db } from "../services/firebase"


// // Get a reference to the database service
// const database = db.ref();
// const memsRef = database.child('memories');

// const storageRef = firebase.storage().ref()

// // uploads image if needed, adds to comm list if needed, posts memory
// // latlong = string (maybe lat, long)
// function addMemory(latlong, title, desc, image, attr, date, comm, color) {
// 	let locsRef = memsRef.child(latlong);
// 	var memKey = locsRef.push().key;
// 	var memData = {
// 		title: title,
// 		desc: desc,
// 		image: newKey,
// 		attr: attr,
// 		date: date,
// 		comm: comm,
// 		color: color
// 	}

// 	var updates = {};
// 	updates['/memories/' + latlong] = memData;


// 	let commsRef = database.child('communities/' + comm);
// 	commsRef.once('value')
// 		.then(function(snapshot) {
// 			if (!(snapshot.exists())) {
// 				var commData = {
// 					comm: comm
// 				}
// 				updates['/communities/' + comm] = commData;
// 			}

// 			database.update(updates);
// 		});

// 	let imagesRef = storageRef.child('images');
// 	let image = imagesRef.child(newKey)
// 	// figure out image type
// 	// .put if blob or file, putString if image is a raw string
// 	var file = image;
// 	imagesRef.put(file).then(function(snapshot);
// }

// function getCommunities() {

// }

// function getMEmories() {
	
// }