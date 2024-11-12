// Immediately Invoked Function Expressions (IIFE)
// () ()

// Named IIFE
(function chai(){
    console.log(`Database connected`); 
}) ();

// Unnamed IIFE
( (name) => {
    console.log(`DB connected with ${name}`);
    
} )("Kingo");