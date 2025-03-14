const interest = [
    { name: "React", description: "I develop modern and dynamic web applications using React, leveraging its component-based architecture and efficient DOM updates with React Hooks and Context API." },
    { name: "React Native", description: "I develop cross-platform mobile applications with React Native, integrating Node.js to create efficient and scalable APIs." },
    { name: "Next.js", description: "I work with Next.js to build optimized web applications, implementing SSR (Server-Side Rendering), SSG (Static Site Generation), and API Routes to enhance performance and SEO." },
    { name: "PostgreSQL", description: "I use PostgreSQL as a relational database to efficiently manage data, ensuring integrity and scalability in my web applications." },
    { name: "TypeScript", description: "I prefer TypeScript to write safer and more maintainable code, leveraging static typing to reduce errors and improve project scalability." },
    { name: "Tailwind CSS", description: "I use Tailwind CSS to design modern and responsive interfaces efficiently, maximizing style reusability and optimizing CSS performance." }
];

const interesContainer = document.getElementById('interesContainer');

interest.forEach(item => {
    const interestDiv = document.createElement('div');
    interestDiv.classList.add('interest-item');
    
    const interestName = document.createElement('h2');
    interestName.textContent = item.name;
    
    const interestDescription = document.createElement('p');
    interestDescription.textContent = item.description;
    
    interestDiv.appendChild(interestName);
    interestDiv.appendChild(interestDescription);
    
    interesContainer.appendChild(interestDiv);
});
