<style>
h1 {
    font-weight: bold;
    font-size: 2.25rem; /* Equivalent to text-4xl */
    margin-bottom: 20px; /* Adds space between the title and the text */
     /* Aligns title with text */
}

.content {
    display: flex; /* Align text and images side by side */
    align-items: flex-start; /* Align vertically at the top */
    justify-content: space-between; /* Space between the text and the images */
    gap: 50px; /* Increased space between text and image columns */
}

.about-us {
    max-width: 500px; /* Limit width of the text */
    text-align: justify;
}

.about-us strong {
    font-weight: bold;
}

.about-us em {
    font-style: normal; /* Remove italics */
    font-weight: bold; /* Make the text bold */
}

.image-section {
    display: flex;
    flex-direction: row; /* Align images horizontally */
    gap: 30px; /* Increased space between images */
    margin-top: 20px; /* Adds space between the image section and the text */
}

.image-section img {
    max-width: 150px; /* Limit the width of the images */
    height: auto; /* Maintain aspect ratio */
}

.image-section .image-label {
    font-weight: bold;
    text-align: center; /* Center the label */
    margin-bottom: 5px; /* Space between label and image */
}

.image-section .image-sub-label {
    font-style: italic; /* Add italic styling to the sub-label */
    text-align: center; /* Center the sub-label under the image */
    margin-top: 5px; /* Adds space between the image label and sub-label */
}

/* Move the second image to the right */
.image-section div:nth-child(2) {
    margin-left: auto; /* Pushes the second image to the right */
}
</style>

<!-- Title Section -->

<!-- Text Section -->
<div class="flex flex-row justify-around items-center">
    <div class="about-us">
        <h1>About Us</h1> 
        <p>
        At <strong>Chicken-Turtle</strong>, we’ve assembled a group of passionate innovators and marketing strategists
        who believe in empowering businesses to connect deeply with their audiences.
        </p>
        <p>
        We’re driven by a belief that feedback is the foundation of growth. We want to help you
        <em>turn audience voices into your most valuable asset.</em>
        </p>
    </div>
    <div class="image-section">
        <div class="flex flex-col items-center">
            <div class="image-label">Nicholas Muller</div>
            <img src="nicholas.webp" alt="Nicholas Muller">
            <div class="image-sub-label">Data Scientist</div>
        </div>
        <div class="flex flex-col items-center">
            <div class="image-label">Bianca Sofia de Buzzaccarini</div>
            <img src="bianca.webp" alt="Bianca Sofia de Buzzaccarini">
            <div class="image-sub-label">Manager</div>
        </div>
        <div class="flex flex-col items-center">
            <div class="image-label">Gabriele Trevisan</div>
            <img src="gabriele.webp" alt="Gabriele Trevisan">
            <div class="image-sub-label"> Exploited Developer</div>
        </div>
    </div>
</div>
<!-- Image Section -->

    


