// BlogPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './BlogPage.css';

const BlogPage = () => {
  const articles = [
    {
      path: "/blog/Jesus'-Tips-for-2024",
      title: "Jesus' Top Tips for Starting 2024 Right",
      image: '/post_pics/2024.png'
    },
    {
      path: "/blog/Digital-Detox",
      title: "Finding Peace in a World Full of Notifications: Jesus' Take on Digital Detox",
      image: '/post_pics/Digital-detox.png'
    },
    {
      path: "/blog/Sermon-On-The-Mount",
      title: "The Sermon on the Mount Goes Digital: Navigating Social Media with Grace",
      image: '/post_pics/The-Sermon.png'
    },
    {
      path: "/blog/Miracle-Of-Mindfulness",
      title: "Miracle of Mindfulness: Christ's Approach to Living in the Moment",
      image: '/post_pics/Mindfulness.png'
    },
    {
      path: "/blog/Turn-Water-To-Wine-Work-Life-Balance",
      title: "Turning Water into Wine: Jesus' Guide to Work-Life Balance",
      image: '/post_pics/Wine.png'
    },
    {
      path: "/blog/Jesus-Peace-With-Trolls",
      title: "Blessed Are the Peacemakers: Conflict Resolution in an Age of Online Trolls",
      image: '/post_pics/Blessed.png'
    },
    {
      path: "/blog/Feeding-the-5000",
      title: "Feeding the Five Thousand: Addressing Modern Hunger with Ancient Compassion",
      image: '/post_pics/Feeding.png'
    },
    {
      path: "/blog/Good-Samaritan-In-The-City",
      title: "The Good Samaritan in the City: Showing Kindness in Urban Chaos",
      image: '/post_pics/Samaritan.png' // Make sure this filename is correct
    },
    {
      path: "/blog/Walking-On-Water",
      title: "Walking on Water: Overcoming Fear in the Face of Uncertainty",
      image: '/post_pics/Walking.png'
    },
    {
      path: "/blog/The-Parable-Of-The-Lost-Phoner",
      title: "The Parable of the Lost Phone: Reconnecting with What Truly Matters",
      image: '/post_pics/Phone.png'
    },
    {
      path: "/blog/The-Last-Supper-Sustainable-Eating",
      title: "The Last Supper: A Call for Sustainable Eating Habits",
      image: '/post_pics/Supper.png'
    },
    {
      path: "/blog/Tablets-At-Sabbath",
      title: "From Stone Tablets to Tablets: Preserving Sabbath in the Tech Era",
      image: '/post_pics/Tablet.png'
    },
    {
      path: "/blog/Prodigal-Son-Returns",
      title: "The Prodigal Son Returns: Dealing with Family Estrangement and Reconciliation",
      image: '/post_pics/Son.png'
    },
    {
      path: "/blog/Love-Thy-Neighbor",
      title: "Love Thy Neighbor: Building Community in a Divided Society",
      image: '/post_pics/Neighbor.png'
    },
    {
      path: "/blog/Beatitudes-Of-Mental-Health",
      title: "The Beatitudes of Mental Health: Jesus' Insights on Coping with Anxiety and Stress",
      image: '/post_pics/Beatitudes.png'
    },
    {
      path: "/blog/Modern-Miracles",
      title: "Modern Miracles: Finding Faith in a Cynical Age",
      image: '/post_pics/Modern.png' // Make sure this filename is correct
    },
    {
      path: "/blog/Fish-And-Loaves-Wealth-Distribution",
      title: "The Fish and the Loaves: Jesus' Perspective on Wealth Distribution",
      image: '/post_pics/Fish.png'
    },
    {
      path: "/blog/Quiet-Quitting-Jesus-Perspective",
      title: "Quiet Quitting: The Jesus Perspective on Finding Purpose at Work",
      image: '/post_pics/Quiet.png'
    },
    {
      path: "/blog/From-Nazareth-To-Now",
      title: "From Nazareth to Now: Embracing Simplicity in a Consumer Culture",
      image: '/post_pics/Now.png'
    },
    {
      path: "/blog/Loving-Your-Enemies",
      title: "Loving Your Enemies: Diffusing Hatred in a Polarized World",
      image: '/post_pics/Enemies.png'
    }
  ];
  

  return (
    <div>
      <Helmet>
        <title>Insightful Articles - Jesus' Modern Perspectives</title>
        <meta name="description" content="Explore a wide range of articles offering Jesus' modern perspectives on contemporary issues. Dive into topics covering everything from digital detox to wealth distribution, and find spiritual insights for today's world." />
        <meta name="keywords" content="Jesus, modern perspectives, spiritual insights, contemporary issues, digital detox, mindfulness, wealth distribution, simplicity, love, faith" />
        {/* Add more meta tags as needed */}
      </Helmet>
    <h1>A Blog According To Jesus</h1>
    <div className="blog-list">
      {articles.map((article, index) => (
        <div key={index} className="blog-list-item">
          <Link to={article.path} className="blog-link">
            <img src={article.image} alt={article.title} className="blog-image" />
            <h2 className="blog-title">{article.title}</h2>
          </Link>
        </div>
      ))}
    </div>
  </div>

  );
};

export default BlogPage;









