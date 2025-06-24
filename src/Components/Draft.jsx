    const handleUpdateProfile = (e) => {
      e.preventDefault();
        const form = e.target;
         const name = form.name.value;
         const image = form.photo.value;
         const email = form.email.value;
         const password = form.password.value;
      
    //  console.log({name, image, email, password})

    //  .then(result =>{ 
    //     setUser(result.user),
    //     console.log(result.user)
    //  })
    //    .catch((error) => {
    //      const errorCode = error.code;
    //      const errorMessage = error.message;
    //      // ..
    //    });
    //      console.log({name, image, email, password})
//   const displayName = user.displayName;
//   const email = user.email;
//   const photoURL = user.photoURL;
  }
