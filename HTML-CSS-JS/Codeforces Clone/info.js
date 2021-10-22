// const userInfo = {
//     apiKey : "58e5d18d255d1aacfb4bb8d4bfc1f9490877ef3b",
//     fetchInfo : function(handle){
//         fetch ( 
//             "https://codeforces.com/api/contest.hacks?handles="
//             + handle
//             + "&apiKey="
//             + this.apiKey
//             + "&time="
//             + System.currentTimeMillis()/1000
//             + "&apiSig=894900c1cc94fe017c82d65862610446e09d9d59"   //894900c1cc94fe017c82d65862610446e09d9d59
//         )
//         .then((response)=> response.jsonp())
        
//         .then((User)=> this.displayInfo(User));
//     },


//     displayInfo : function(User){
//         const{handle} = User.handle;
//         const{email} = User.email;
//         const {firstName} = User.firstName;
//         const {lastName} = User.lastName;
//         const {rating} = User.rating;
//         const {rank} = User.rank;

//         console.log(email,firstName,lasName,rating,rank);
        
//         document.querySelector(".handle").innertext = "Details of" + handle;
//         document.querySelector(".email").innertext =  email;
//         document.querySelector(".firstName").innertext = firstName;
//         document.querySelector(".lastName").innertext = lastName;
//         document.querySelector(".rating").innertext = rating;
//         document.querySelector("rank").innertext = rank;
//     },

// search: function(){
//     this.fetchInfo(document.querySelector("search-bar").value);
// },
// //DmitriyH
// document.querySelector(".search button").addEventListener("click", function () {
//     userInfo.search();
//   }),
  
//   document
//   .querySelector(".search-bar")
//     .addEventListener("keyup", function (event) {
//       if (event.key == "Enter") {
//         userInfo.search();
//       }
//     }),
  
    
// }


// var d = new Date();
// var n = d.getTime();
// const user = () => {
//     const apiKey = "58e5d18d255d1aacfb4bb8d4bfc1f9490877ef3b";
//      fetch ( 
//                "https://codeforces.com/api/contest.hacks?handles=DmitriyH"
              
//               + "&apiKey="
//                + apiKey
//                 + "&time="
//               + n
//                + "&apiSig=894900c1cc94fe017c82d65862610446e09d9d59"   //894900c1cc94fe017c82d65862610446e09d9d59
//            )
//            .then((res) => {console.log(res)});
        
        
//      }


//      user();
//https://codeforces.com/api/user.info?handles=DmitriyH&apiKey=58e5d18d255d1aacfb4bb8d4bfc1f9490877ef3b&time=1619372449&apiSig=123456sha512Hex(123456/user.info?apiKey=58e5d18d255d1aacfb4bb8d4bfc1f9490877ef3b&chandles=DmitriyH&time=1619372449#894900c1cc94fe017c82d65862610446e09d9d59)

//https://codeforces.com/api/user.info?handles=DmitriyH&apiKey=58e5d18d255d1aacfb4bb8d4bfc1f9490877ef3b&time=1619372449&apiSig=123456<hash>
//https://codeforces.com/api/user.info?handles=DmitriyH&apiKey=58e5d18d255d1aacfb4bb8d4bfc1f9490877ef3b&time=1619372449&apiSig=894900c1cc94fe017c82d65862610446e09d9d59


//https://codeforces.com/api/contest.hacks?contestId=566&apiKey=xxx&time=1619377895&apiSig=735465sha512Hex(735465/contest.hacks?apiKey=58e5d18d255d1aacfb4bb8d4bfc1f9490877ef3b&contestId=566&time=1619377895#894900c1cc94fe017c82d65862610446e09d9d59)
//https://codeforces.com/api/user.info?handles=DmitriyH








// const userInfo = {
//        apiKey : "58e5d18d255d1aacfb4bb8d4bfc1f9490877ef3b",
//        fetchInfo : function(handle){
//             fetch ( 
//                 "https://codeforces.com/api/user.info?handles="
//                 + handle
               
//             )
//             .then((response)=> response.json())
            
//            .then((User)=> this.displayInfo(User));
//         },
    
    
//         displayInfo : function(User){
//             const{handle} = User.result[0].handle;
//           const{email} = User.result[0].email;
//             const {firstName} = User.result[0].firstName;
//              const {lastName} = User.result[0].lastName;
//            const {rating} = User.result[0].rating;
//            //const {rank} = User;
    
//             console.log(email,firstName,lastName,rating);
            
//            document.querySelector(".handle").innertext = "Details of" + handle;
//             document.querySelector(".email").innertext =  email;
//            document.querySelector(".firstName").innertext = firstName;
//             document.querySelector(".lastName").innertext = lastName;
//             document.querySelector(".rating").innertext = rating;
//             //document.querySelector("rank").innertext = maxRank;
//         },
    
//     search: function(){
//          this.fetchInfo(document.querySelector(".search-bar").value);
//     },
// };
// document.querySelector(".search button").addEventListener("click", function () {
//     userInfo.search();
//   });
  
//   document
//     .querySelector(".search-bar")
//     .addEventListener("keyup", function (event) {
//       if (event.key == "Enter") {
//         userInfo.search();
//       }
//     });
//      //DmitriyH
    



// function fetchData(){
//     fetch("https://codeforces.com/api/user.info?handles=DmitriyH;Fefer_Ivan").then(response =>{
//         if (!response.ok){
//             throw Error("ERROR");
//         }
//          return response.json();
         
//      })
//      .then(data => {
//          console.log(data.result);
//          const html = data.result
//          .map(user => {
//             return '<p> Name : ${user.lastName}</p>'
//             console.log(html);
//         })
        
//          document.querySelector('#Input').insertAdjacentHTML('afterbegin',html);
//      })
//      .catch(error => {
//          console.log(error);
//      });
//  }
//  fetchData();

 
//  const userInfo = {
       
//        fetchInfo : function(handle){
//             fetch ( 
//                 "https://codeforces.com/api/user.info?handles="
//                 + handle
               
//             )
//             .then((response)=> response.json())
            
//            .then((User)=> this.displayInfo(User));
//         },
//     }

//         displayInfo : function(User){
//             const{handle} = User.result[0].handle;
//           const{email} = User.result[0].email;
//             const {firstName} = User.result[0].firstName;
//              const {lastName} = User.result[0].lastName;
//            const {rating} = User.result[0].rating;
//            //const {rank} = User;
    
//             console.log(email,firstName,lastName,rating);
            
//            document.querySelector(".handle").innertext = "Details of" + handle;
//             document.querySelector(".email").innertext =  email;
//            document.querySelector(".firstName").innertext = firstName;
//             document.querySelector(".lastName").innertext = lastName;
//             document.querySelector(".rating").innertext = rating;
//             //document.querySelector("rank").innertext = maxRank;
//         },
 
