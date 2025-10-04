---
layout: page
title: Leadership & Coaching
subtitle: Our Committee and Coaches
permalink: /about/leadership/
---

<div class="page-content">
  <div class="container">
    <div class="president-section">
      <div class="president-card">
        <div class="president-image">
          <img src="/assets/images/committee/185320536_4046071685442761_3204034504875852568_n.jpg" alt="Charlie Sale - President">
        </div>
        <div class="president-info">
          <h2>Charlie Sale</h2>
          <h3>President</h3>
          <div class="president-bio">
            <p>Former player turned President, Charlie focuses on building strong team culture and individual player development.</p>
            <p>Under Charlie's leadership, Footscray Rugby Club has strengthened its position as the premier rugby club in Melbourne's western suburbs, with a clear vision for sustainable growth and community engagement.</p>
          </div>
          <div class="president-contact">
            <h4>Contact</h4>
            <p><strong>Email:</strong> <a href="mailto:charliexmich@gmail.com">charliexmich@gmail.com</a></p>
            <p><strong>Phone:</strong> <a href="tel:0408571215">0408 571 215</a></p>
          </div>
        </div>
      </div>
    </div>

    <div class="coaching-section">
      <h2>Coaching Group</h2>
      <div class="coaching-card">
        <div class="coaching-image">
          <img src="/assets/images/committee/coaching-group-senior-mens.jpg" alt="Senior Men's Coaching Group">
        </div>
        <div class="coaching-info">
          <h3>Senior Men's Coaching Team</h3>
          <p>Our dedicated coaching group brings together experienced rugby minds committed to developing players and building a winning culture at Footscray Rugby Club.</p>
          <p>Led by our Head Coaches and supported by specialist coaches across all grades, our coaching team focuses on technical excellence, tactical development, and creating an environment where every player can reach their potential.</p>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
.president-section,
.coaching-section {
  max-width: 1000px;
  margin: 0 auto;
  padding: var(--spacing-xl) 0;
}

.coaching-section {
  margin-top: var(--spacing-xxl);
}

.coaching-section h2 {
  color: var(--primary-color);
  font-size: 2rem;
  margin-bottom: var(--spacing-xl);
  text-align: center;
}

.coaching-card {
  background: white;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
}

.coaching-image {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: var(--radius-md);
}

.coaching-image img {
  width: 100%;
  height: auto;
  display: block;
}

.coaching-info {
  padding: var(--spacing-xxl);
  text-align: center;
}

.coaching-info h3 {
  color: var(--primary-color);
  font-size: 1.75rem;
  margin-bottom: var(--spacing-lg);
}

.coaching-info p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--gray-700);
  margin-bottom: var(--spacing-lg);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.coaching-info p:last-child {
  margin-bottom: 0;
}

.president-section {
  max-width: 1000px;
  margin: 0 auto;
  padding: var(--spacing-xl) 0;
}

.president-card {
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: var(--spacing-xxl);
  background: white;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
}

.president-image {
  height: 500px;
  overflow: hidden;
}

.president-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.president-info {
  padding: var(--spacing-xxl);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.president-info h2 {
  color: var(--primary-color);
  font-size: 2.5rem;
  margin-bottom: var(--spacing-sm);
}

.president-info h3 {
  color: var(--gray-600);
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: var(--spacing-xl);
}

.president-bio {
  margin-bottom: var(--spacing-xl);
}

.president-bio p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--gray-700);
  margin-bottom: var(--spacing-lg);
}

.president-bio p:last-child {
  margin-bottom: 0;
}

.president-contact {
  background: var(--gray-50);
  padding: var(--spacing-lg);
  border-radius: var(--radius-md);
  border-left: 4px solid var(--primary-color);
}

.president-contact h4 {
  color: var(--primary-color);
  margin-bottom: var(--spacing-md);
}

.president-contact p {
  margin-bottom: var(--spacing-sm);
  color: var(--gray-700);
}

.president-contact p:last-child {
  margin-bottom: 0;
}

.president-contact a {
  color: var(--primary-color);
  text-decoration: none;
}

.president-contact a:hover {
  text-decoration: underline;
}

/* Responsive Design */
@media (max-width: 900px) {
  .president-card {
    grid-template-columns: 1fr;
  }
  
  .president-image {
    height: 400px;
  }
  
  .president-info {
    padding: var(--spacing-xl);
  }
  
  .president-info h2 {
    font-size: 2rem;
  }
}

@media (max-width: 600px) {
  .president-image {
    height: 300px;
  }
  
  .president-info {
    padding: var(--spacing-lg);
  }
  
  .president-info h2 {
    font-size: 1.75rem;
  }
  
  .president-info h3 {
    font-size: 1.25rem;
  }
  
  .president-bio p {
    font-size: 1rem;
  }
}
</style>