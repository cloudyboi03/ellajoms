function handleAnswer(answer) {
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const responseDiv = document.getElementById('response');
    const gifContainer = document.getElementById('gifContainer');
    
    if (answer === 'yes') {
        yesButton.disabled = true; // Disable button after click
        noButton.disabled = true; // Disable No button too
        responseDiv.innerHTML = "<p>Yay! You're my Valentine!</p>";
        
        const yesGif = document.createElement('img');
        yesGif.src = "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExam8wY2xhemk4d3Nkbm9idHY3ODc5bmw1d2NmZnh0NHlzNGFkdDVvMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Rt0ILm8fou5TVx47xv/giphy.gif";
        yesGif.alt = "Yes GIF";
        gifContainer.appendChild(yesGif);
    } else if (answer === 'no') {
        yesButton.disabled = true; // Disable Yes button after click
        noButton.disabled = true; // Disable No button too
        responseDiv.innerHTML = "<p>Oh no, maybe next time!</p>";
        
        const noGif = document.createElement('img');
        noGif.src = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGU4aDN1d2FpN3hkYTlmbGFlb3Nid21uY3Jjd3IycDhqZGJocHkwbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8Frnj3MI2kAmjD08WC/giphy.gif";
        noGif.alt = "No GIF";
        gifContainer.appendChild(noGif);
    }
}
