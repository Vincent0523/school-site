// data-service.js - Handles data fetching from MongoDB

// Function to load all dynamic content
function loadDynamicContent() {
    // Load announcements
    loadAnnouncements();
    
    // Load upcoming events
    loadEvents();
    
    // Load news
    loadNews();
    
    // Load testimonials
    loadTestimonials();
    
    // Load gallery
    loadGallery();
}

// Function to load announcements from MongoDB
function loadAnnouncements() {
    const announcementSlider = document.getElementById('announcementSlider');
    if (!announcementSlider) return;
    
    // In a real implementation, you would fetch from MongoDB
    // For demonstration, we'll use sample data
    fetch('/api/announcements')
        .then(response => {
            // Simulate API response for demonstration
            return {
                ok: true,
                json: () => Promise.resolve([
                    {
                        _id: '1',
                        title: 'School Closed for Spring Break',
                        content: 'School will be closed from April 12-16 for Spring Break. Classes resume April 19.',
                        date: '2025-04-05'
                    },
                    {
                        _id: '2',
                        title: 'Advanced Placement Exam Schedule',
                        content: 'AP exams will be held May 3-14. See the exam schedule for details.',
                        date: '2025-04-02'
                    },
                    {
                        _id: '3',
                        title: 'Senior Project Deadline',
                        content: 'Senior project final submissions are due April 30. Contact your advisor with questions.',
                        date: '2025-03-28'
                    }
                ])
            };
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch announcements');
            }
            return response.json();
        })
        .then(announcements => {
            // Clear loading message
            announcementSlider.innerHTML = '';
            
            // Create and append announcement items
            announcements.forEach(announcement => {
                const date = new Date(announcement.date);
                const formattedDate = `${date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`;
                
                const announcementItem = document.createElement('div');
                announcementItem.className = 'announcement-item';
                announcementItem.innerHTML = `
                    <h3>${announcement.title}</h3>
                    <div class="date">${formattedDate}</div>
                    <p>${announcement.content}</p>
                `;
                
                announcementSlider.appendChild(announcementItem);
            });
            
            // Initialize the slider
            initializeSliders();
        })
        .catch(error => {
            console.error('Error loading announcements:', error);
            announcementSlider.innerHTML = `
                <div class="announcement-error">
                    <p>Unable to load announcements. Please try again later.</p>
                </div>
            `;
        });
}

// Function to load upcoming events from MongoDB
function loadEvents() {
    const eventsContainer = document.getElementById('upcomingEvents');
    if (!eventsContainer) return;
    
    // In a real implementation, you would fetch from MongoDB
    // For demonstration, we'll use sample data
    fetch('/api/events')
        .then(response => {
            // Simulate API response for demonstration
            return {
                ok: true,
                json: () => Promise.resolve([
                    {
                        _id: '1',
                        title: 'Parent-Teacher Conference',
                        description: 'Semester progress reports and discussion with teachers.',
                        date: '2025-04-15',
                        time: '4:00 PM - 7:00 PM',
                        location: 'School Gymnasium'
                    },
                    {
                        _id: '2',
                        title: 'Spring Concert',
                        description: 'Featuring performances by the school band, choir, and orchestra.',
                        date: '2025-04-22',
                        time: '6:30 PM',
                        location: 'School Auditorium'
                    },
                    {
                        _id: '3',
                        title: 'Science Fair',
                        description: 'Students present their science projects and compete for prizes.',
                        date: '2025-04-28',
                        time: '9:00 AM - 3:00 PM',
                        location: 'School Cafeteria'
                    }
                ])
            };
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch events');
            }
            return response.json();
        })
        .then(events => {
            // Clear loading message
            eventsContainer.innerHTML = '';
            
            // Create and append event cards
            events.forEach(event => {
                const date = new Date(event.date);
                const eventCard = document.createElement('div');
                eventCard.className = 'event-card';
                eventCard.innerHTML = `
                    <div class="event-details">
                        <div class="event-date">
                            <div class="day">${date.getDate()}</div>
                            <div class="month">${date.toLocaleDateString('en-US', { month: 'short' })}</div>
                        </div>
                        <h3 class="event-title">${event.title}</h3>
                        <div class="event-meta">
                            <div class="event-time"><i class="fas fa-clock"></i> ${event.time}</div>
                        </div>
                        <div class="event-meta">
                            <div class="event-location"><i class="fas fa-map-marker-alt"></i> ${event.location}</div>
                        </div>
                        <p class="event-description">${event.description}</p>
                        <a href="events.html#event-${event._id}" class="btn btn-outline">More Details</a>
                    </div>
                `;
                
                eventsContainer.appendChild(eventCard);
            });
        })
        .catch(error => {
            console.error('Error loading events:', error);
            eventsContainer.innerHTML = `
                <div class="events-error">
                    <p>Unable to load events. Please try again later.</p>
                </div>
            `;
        });
}

// Function to load news from MongoDB
function loadNews() {
    const newsGrid = document.getElementById('newsGrid');
    if (!newsGrid) return;
    
    // In a real implementation, you would fetch from MongoDB
    // For demonstration, we'll use sample data
    fetch('/api/news')
        .then(response => {
            // Simulate API response for demonstration
            return {
                ok: true,
                json: () => Promise.resolve([
                    {
                        _id: '1',
                        title: 'Ridgeview Students Win Regional Robotics Competition',
                        excerpt: 'Our robotics team took first place at the regional championship and will advance to nationals.',
                        image: '/api/placeholder/300/200',
                        author: 'Ms. Johnson',
                        date: '2025-04-03',
                        category: 'Achievements'
                    },
                    {
                        _id: '2',
                        title: 'New Computer Lab Opening Next Month',
                        excerpt: 'Thanks to a generous donation, we will be opening a state-of-the-art computer lab in May.',
                        image: '/api/placeholder/300/200',
                        author: 'Principal Williams',
                        date: '2025-03-28',
                        category: 'Facilities'
                    },
                    {
                        _id: '3',
                        title: 'Athletic Department Announces Summer Sports Camps',
                        excerpt: 'Registration is now open for summer basketball, soccer, and swimming camps.',
                        image: '/api/placeholder/300/200',
                        author: 'Coach Thompson',
                        date: '2025-03-25',
                        category: 'Athletics'
                    }
                ])
            };
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch news');
            }
            return response.json();
        })
        .then(news => {
            // Clear loading message
            newsGrid.innerHTML = '';
            
            // Create and append news cards
            news.forEach(article => {
                const date = new Date(article.date);
                const formattedDate = date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
                
                const newsCard = document.createElement('div');
                newsCard.className = 'news-card';
                newsCard.innerHTML = `
                    <img src="${article.image}" alt="${article.title}">
                    <div class="news-content">
                        <div class="news-meta">
                            <span class="news-date">${formattedDate}</span>
                            <span class="news-category">${article.category}</span>
                        </div>
                        <h3 class="news-title">${article.title}</h3>
                        <p class="news-excerpt">${article.excerpt}</p>
                        <a href="news.html#article-${article._id}" class="btn btn-outline">Read More</a>
                    </div>
                `;
                
                newsGrid.appendChild(newsCard);
            });
        })
        .catch(error => {
            console.error('Error loading news:', error);
            newsGrid.innerHTML = `
                <div class="news-error">
                    <p>Unable to load news. Please try again later.</p>
                </div>
            `;
        });
}

// Function to load testimonials from MongoDB
function loadTestimonials() {
    const testimonialSlider = document.getElementById('testimonialSlider');
    if (!testimonialSlider) return;
    
    // In a real implementation, you would fetch from MongoDB
    // For demonstration, we'll use sample data
    fetch('/api/testimonials')
        .then(response => {
            // Simulate API response for demonstration
            return {
                ok: true,
                json: () => Promise.resolve([
                    {
                        _id: '1',
                        content: 'The teachers at Ridgeview High School are passionate and dedicated. My daughter has thrived academically and socially during her time here.',
                        author: 'Sarah Johnson',
                        role: 'Parent'
                    },
                    {
                        _id: '2',
                        content: 'Ridgeview provided me with amazing opportunities that prepared me for college. The AP courses and extracurricular activities helped me gain admission to my dream university.',
                        author: 'Michael Chen',
                        role: 'Alumni, Class of 2024'
                    },
                    {
                        _id: '3',
                        content: 'The supportive community at Ridgeview has made my high school experience incredible. The teachers truly care about our success both in and out of the classroom.',
                        author: 'Emma Rodriguez',
                        role: 'Current Student, Grade 11'
                    }
                ])
            };
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch testimonials');
            }
            return response.json();
        })
        .then(testimonials => {
            // Clear loading message
            testimonialSlider.innerHTML = '';
            
            // Create and append testimonial items
            testimonials.forEach(testimonial => {
                const testimonialItem = document.createElement('div');
                testimonialItem.className = 'testimonial-item';
                testimonialItem.innerHTML = `
                    <p class="testimonial-content">"${testimonial.content}"</p>
                    <div class="testimonial-author">${testimonial.author}</div>
                    <div class="testimonial-role">${testimonial.role}</div>
                `;
                
                testimonialSlider.appendChild(testimonialItem);
            });
            
            // Initialize the slider
            initializeSliders();
        })
        .catch(error => {
            console.error('Error loading testimonials:', error);
            testimonialSlider.innerHTML = `
                <div class="testimonial-error">
                    <p>Unable to load testimonials. Please try again later.</p>
                </div>
            `;
        });
}

// Function to load gallery from MongoDB
function loadGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    if (!galleryGrid) return;
    
    // In a real implementation, you would fetch from MongoDB
    // For demonstration, we'll use sample data
    fetch('/api/gallery')
        .then(response => {
            // Simulate API response for demonstration
            return {
                ok: true,
                json: () => Promise.resolve([
                    {
                        _id: '1',
                        image: '/api/placeholder/400/300',
                        caption: 'Students working on robotics project'
                    },
                    {
                        _id: '2',
                        image: '/api/placeholder/400/300',
                        caption: 'Championship basketball game'
                    },
                    {
                        _id: '3',
                        image: '/api/placeholder/400/300',
                        caption: 'Science fair presentations'
                    },
                    {
                        _id: '4',
                        image: '/api/placeholder/400/300',
                        caption: 'Spring concert performance'
                    }
                ])
            };
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch gallery');
            }
            return response.json();
        })
        .then(galleryItems => {
            // Clear loading message
            galleryGrid.innerHTML = '';
            
            // Create and append gallery items
            galleryItems.forEach(item => {
                const galleryItem = document.createElement('div');
                galleryItem.className = 'gallery-item';
                galleryItem.innerHTML = `
                    <img src="${item.image}" alt="${item.caption}">
                    <div class="gallery-caption">${item.caption}</div>
                `;
                
                galleryGrid.appendChild(galleryItem);
            });
            
            // Initialize lightbox
            initializeLightbox();
        })
        .catch(error => {
            console.error('Error loading gallery:', error);
            galleryGrid.innerHTML = `
                <div class="gallery-error">
                    <p>Unable to load gallery. Please try again later.</p>
                </div>
            `;
        });
}

// MongoDB Connection Setup (Server-side code - for reference)

// This would be in your server.js or similar file
const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();

// MongoDB connection string
const uri = "mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToDatabase() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
        return client.db('schoolWebsite');
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
        process.exit(1);
    }
}
// API endpoints
app.get('/api/announcements', async (req, res) => {
    try {
        const db = await connectToDatabase();
        const announcements = await db.collection('announcements')
            .find({})
            .sort({ date: -1 })
            .limit(5)
            .toArray();
        res.json(announcements);
    } catch (error) {
        console.error('Error fetching announcements:', error);
        res.status(500).json({ error: 'Failed to fetch announcements' });
    }
});

app.get('/api/events', async (req, res) => {
    try {
        const db = await connectToDatabase();
        const events = await db.collection('events')
            .find({ date: { $gte: new Date() } })
            .sort({ date: 1 })
            .limit(3)
            .toArray();
        res.json(events);
    } catch (error) {
        console.error('Error fetching events:', error);
        res.status(500).json({ error: 'Failed to fetch events' });
    }
});

app.get('/api/news', async (req, res) => {
    try {
        const db = await connectToDatabase();
        const news = await db.collection('news')
            .find({})
            .sort({ date: -1 })
            .limit(3)
            .toArray();
        res.json(news);
    } catch (error) {
        console.error('Error fetching news:', error);
        res.status(500).json({ error: 'Failed to fetch news' });
    }
});

app.get('/api/testimonials', async (req, res) => {
    try {
        const db = await connectToDatabase();
        const testimonials = await db.collection('testimonials')
            .find({ approved: true })
            .toArray();
        res.json(testimonials);
    } catch (error) {
        console.error('Error fetching testimonials:', error);
        res.status(500).json({ error: 'Failed to fetch testimonials' });
    }
});

app.get('/api/gallery', async (req, res) => {
    try {
        const db = await connectToDatabase();
        const gallery = await db.collection('gallery')
            .find({})
            .sort({ _id: -1 })
            .limit(4)
            .toArray();
        res.json(gallery);
    } catch (error) {
        console.error('Error fetching gallery:', error);
        res.status(500).json({ error: 'Failed to fetch gallery' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
