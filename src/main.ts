// Відкриття модального вікна
const modalTrigger = document.getElementById('modal-trigger') as HTMLElement;
const modal = document.getElementById('modal') as HTMLElement;
const closeModal = document.getElementById('close-modal') as HTMLElement;

modalTrigger.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Обробник події scroll
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar') as HTMLElement;
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Fetch даних з API
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then((data: Post[]) => {
    const postsContainer = document.getElementById('posts') as HTMLElement;
    data.forEach(post => {
      const postElement = document.createElement('div');
      postElement.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
      postsContainer.appendChild(postElement);
    });
  });
