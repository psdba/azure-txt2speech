const speakButton = document.getElementById("speakBtn");

speakButton.addEventListener("click", () => {
    const text = document.getElementById("text").value;

    if (!text) {
        alert("Please enter some text.");
        return;
    }

    const speechConfig = SpeechSDK.SpeechConfig.fromSubscription("E9kB67a4Us0WUf6DgiBz1Ro3O5s60mcdsOlZHmwXgjBJ3np3zx0zJQQJ99BBACYeBjFXJ3w3AAAYACOGyojp", "eastus");
    speechConfig.speechSynthesisVoiceName = "en-US-JennyNeural"; // Choose a voice

    const synthesizer = new SpeechSDK.SpeechSynthesizer(speechConfig);
    synthesizer.speakTextAsync(
        text,
        result => {
            if (result.reason === SpeechSDK.ResultReason.SynthesizingAudioCompleted) {
                console.log("Speech synthesis completed.");
            } else {
                console.error("Speech synthesis failed:", result.errorDetails);
            }
            synthesizer.close();
        },
        error => {
            console.error(error);
            synthesizer.close();
        }
    );
});
