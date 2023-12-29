// BlogPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './BlogPage.css';

const BlogPage = () => {
  const articles = [
    { path: "/blog/Jesus'-Tips-for-2024", title: "Jesus' Top Tips for Starting 2024 Right" },
    { path: "/blog/Digital-Detox", title: "Finding Peace in a World Full of Notifications: Jesus' Take on Digital Detox" },
    { path: "/blog/Sermon-On-The-Mount", title: "The Sermon on the Mount Goes Digital: Navigating Social Media with Grace" },
    { path: "/blog/Miracle-Of-Mindfullness", title: "Miracle of Mindfulness: Christ's Approach to Living in the Moment" },
    { path: "/blog/Turn-Water-To-Wine-Work-Life-Balance", title: "Turning Water into Wine: Jesus' Guide to Work-Life Balance" },
    { path: "/blog/Jesus-Peace-With-Trolls", title: "Blessed Are the Peacemakers: Conflict Resolution in an Age of Online Trolls" },
    { path: "/blog/Feeding-the-5000", title: "Feeding the Five Thousand: Addressing Modern Hunger with Ancient Compassion" },
    { path: "/blog/Good-Samaritan-In-The-City", title: "The Good Samaritan in the City: Showing Kindness in Urban Chaos" },
    { path: "/blog/Walking-On-Water", title: "Walking on Water: Overcoming Fear in the Face of Uncertainty" },
    { path: "/blog/The-Parable-Of-The-Lost-Phoner", title: "The Parable of the Lost Phone: Reconnecting with What Truly Matters" },
    { path: "/blog/The-Last-Supper-Sustainable-Eating", title: "The Last Supper: A Call for Sustainable Eating Habits" },
    { path: "/blog/Tablets-At-Sabbath", title: "From Stone Tablets to Tablets: Preserving Sabbath in the Tech Era" },
    { path: "/blog/Prodigal-Son-Returns", title: "The Prodigal Son Returns: Dealing with Family Estrangement and Reconciliation" },
    { path: "/blog/Love-Thy-Neighbor", title: "Love Thy Neighbor: Building Community in a Divided Society" },
    { path: "/blog/Beatitudes-Of-Mental-Health", title: "The Beatitudes of Mental Health: Jesus' Insights on Coping with Anxiety and Stress" },
    { path: "/blog/Modern-Miracles", title: "Modern Miracles: Finding Faith in a Cynical Age" },
    { path: "/blog/Fish-And-Loaves-Wealth-Distribution", title: "The Fish and the Loaves: Jesus' Perspective on Wealth Distribution" },
    { path: "/blog/Quiet-Quitting-Jesus-Perspective", title: "Quiet Quitting: The Jesus Perspective on Finding Purpose at Work" },
    { path: "/blog/From-Nazareth-To-Now", title: "From Nazareth to Now: Embracing Simplicity in a Consumer Culture" },
    { path: "/blog/Loving-Your-Enemies", title: "Loving Your Enemies: Diffusing Hatred in a Polarized World" }
  ];

  return (
    <div>
      <Helmet>
        <title>Insightful Articles - Jesus' Modern Perspectives</title>
        <meta name="description" content="Explore a wide range of articles offering Jesus' modern perspectives on contemporary issues. Dive into topics covering everything from digital detox to wealth distribution, and find spiritual insights for today's world." />
        <meta name="keywords" content="Jesus, modern perspectives, spiritual insights, contemporary issues, digital detox, mindfulness, wealth distribution, simplicity, love, faith" />
        {/* Add more meta tags as needed */}
      </Helmet>
      <h1>Blog Posts</h1>
      <ul>
        {articles.map((article, index) => (
          <li key={index}>
            <Link to={article.path}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPage;









