import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import PhotoDetails from './components/jsx/PhotoDetails';
import Home from './pages/Home';
import Gallery from './components/jsx/gallery';

function App() {
    const [artData, setArtData] = useState([
        {
            id: 1,
            name: 'Starry Night',
            year: 1889,
            description: `Although The Starry Night was painted during the day in Van Gogh's ground-floor studio, it would be inaccurate to state that the picture was painted from memory. 
      The view has been identified as the one from his bedroom window, facing east, a view which Van Gogh painted variations of no fewer than twenty-one times, including The Starry Night. 
      "Through the iron-barred window," he wrote to his brother, Theo, around 23 May 1889, "I can see an enclosed square of wheat ... above which, in the morning, I watch the sun rise in all its glory."`,
            source: 'https://en.wikipedia.org/wiki/The_Starry_Night',
            artist: {
                image: '/assets/starry-night/artist.jpg',
                name: 'Vincent Van Gogh'
            },
            images: {
                thumbnail: '/assets/starry-night/thumbnail.jpg',
                hero: {
                    small: '/assets/starry-night/hero-small.jpg',
                    large: '/assets/starry-night/hero-large.jpg'
                },
                gallery: '/assets/starry-night/gallery.jpg'
            }
        },
        {
            id: 2,
            name: 'Girl with a Pearl Earring',
            year: 1665,
            description: `The painting is a tronie, the Dutch 17th-century description of a 'head' that was not meant to be a portrait. 
      It depicts a European girl wearing an exotic dress, an oriental turban, and what was thought to be a very large pearl as an earring. 
      In 2014, Dutch astrophysicist Vincent Icke raised doubts about the material of the earring and argued that it looks more like polished tin than pearl on the grounds of the specular reflection, the pear shape and the large size of the earring.`,
            source: 'https://en.wikipedia.org/wiki/Girl_with_a_Pearl_Earring',
            artist: {
                image: '/assets/girl-with-pearl-earring/artist.jpg',
                name: 'Johannes Vermeer'
            },
            images: {
                thumbnail: '/assets/girl-with-pearl-earring/thumbnail.jpg',
                hero: {
                    small: '/assets/girl-with-pearl-earring/hero-small.jpg',
                    large: '/assets/girl-with-pearl-earring/hero-large.jpg'
                },
                gallery: '/assets/girl-with-pearl-earring/gallery.jpg'
            }
        },
        {
            name: 'Guernica',
            year: 1937,
            id: 3,
            description: `The scene occurs within a room where, on the left, a wide-eyed bull stands over a grieving woman holding a dead child in her arms. 
      In the center of the room a horse falls in agony with a large gaping hole in its side, as if it had just been run through by a spear or javelin. 
      The horse appears to be wearing chain mail armor, decorated with vertical tally marks arranged in rows. 
      A dead and dismembered soldier lies under the horse. The hand of his severed right arm grasps a shattered sword, from which a flower grows.`,
            source: 'https://en.wikipedia.org/wiki/Guernica_(Picasso)',
            artist: {
                image: '/assets/guernica/artist.jpg',
                name: 'Pablo Picasso'
            },
            images: {
                thumbnail: '/assets/guernica/thumbnail.jpg',
                hero: {
                    small: '/assets/guernica/hero-small.jpg',
                    large: '/assets/guernica/hero-large.jpg'
                },
                gallery: '/assets/guernica/gallery.jpg'
            }
        },
        {
            name: 'Penitent Magdalene',
            year: 1625,
            id: 4,
            description: `Penitent Magdalene is a painting by the Italian artist Artemisia Gentileschi. It hangs in Seville Cathedral. 
      It has probably been in the cathedral since the late 17th century. 
      The painting's first home was the collection of Fernando Enriquez Afan de Ribera, from 1626 to 1637. 
      She returned to the subject later in the 1620s in Mary Magdalene as Melancholy.`,
            source: 'https://en.wikipedia.org/wiki/Penitent_Magdalene_(Artemisia_Gentileschi)',
            artist: {
                image: '/assets/penitent-magdalene/artist.jpg',
                name: 'Artemisia Gentileschi'
            },
            images: {
                thumbnail: '/assets/penitent-magdalene/thumbnail.jpg',
                hero: {
                    small: '/assets/penitent-magdalene/hero-small.jpg',
                    large: '/assets/penitent-magdalene/hero-large.jpg'
                },
                gallery: '/assets/penitent-magdalene/gallery.jpg'
            }
        },
        {
            id: 5,
            name: 'The Storm on the Sea of Galilee',
            year: 1633,
            description: `The painting, in vertical format, shows a close-up view of Christ's disciples struggling frantically against the heavy storm to regain control of their fishing boat. 
      A huge wave beats the bow and rips the sail. One of the disciples is seen vomiting over the side. 
      Another one, looking directly out at the viewer, is a self-portrait of the artist. Only Christ, depicted on the right, remains calm.`,
            source: 'https://en.wikipedia.org/wiki/The_Storm_on_the_Sea_of_Galilee',
            artist: {
                image: '/assets/the-storm-on-the-sea-of-galilee/artist.jpg',
                name: 'Rembrandt'
            },
            images: {
                thumbnail:
                    '/assets/the-storm-on-the-sea-of-galilee/thumbnail.jpg',
                hero: {
                    small: '/assets/the-storm-on-the-sea-of-galilee/hero-small.jpg',
                    large: '/assets/the-storm-on-the-sea-of-galilee/hero-large.jpg'
                },
                gallery: '/assets/the-storm-on-the-sea-of-galilee/gallery.jpg'
            }
        },
        {
            name: 'The Great Wave off Kanagawa',
            year: 1831,
            id: 6,
            description: `The Great Wave off Kanagawa (Japanese: 神奈川沖浪裏, Hepburn: Kanagawa-oki Nami Ura, lit. "Under the Wave off Kanagawa"), also known as The Great Wave or simply The Wave, 
      is a woodblock print by the Japanese ukiyo-e artist Hokusai. It was published sometime between 1829 and 1833 in the late Edo period as the first print in Hokusai's series Thirty-six Views of Mount Fuji. 
      The image depicts an enormous wave threatening three boats off the coast in the Sagami Bay (Kanagawa Prefecture) while Mount Fuji rises in the background.`,
            source: 'https://en.wikipedia.org/wiki/The_Great_Wave_off_Kanagawa',
            artist: {
                image: '/assets/the-great-wave-off-kanagawa/artist.jpg',
                name: 'Hokusai'
            },
            images: {
                thumbnail: '/assets/the-great-wave-off-kanagawa/thumbnail.jpg',
                hero: {
                    small: '/assets/the-great-wave-off-kanagawa/hero-small.jpg',
                    large: '/assets/the-great-wave-off-kanagawa/hero-large.jpg'
                },
                gallery: '/assets/the-great-wave-off-kanagawa/gallery.jpg'
            }
        },
        {
            name: 'Van Gogh Self-portrait',
            year: 1889,
            id: 7,
            description: `This self-portrait was one of about 32 produced over a 10-year period, and these were an important part of his work as a painter; 
      he painted himself because he often lacked the money to pay for models. He took the painting with him to Auvers-sur-Oise, near Paris, where he showed it to Dr. Paul Gachet, who thought it was "absolutely fanatical". 
      Art historians are divided as to whether this painting or Self-portrait without beard is Van Gogh's final self-portrait. The art historians Ingo F. Walther and Jan Hulsker consider this to be the last.`,
            source: 'https://en.wikipedia.org/wiki/Van_Gogh_self-portrait_(1889)',
            artist: {
                image: '/assets/van-gogh-self-portrait/artist.jpg',
                name: 'Vincent Van Gogh'
            },
            images: {
                thumbnail: '/assets/van-gogh-self-portrait/thumbnail.jpg',
                hero: {
                    small: '/assets/van-gogh-self-portrait/hero-small.jpg',
                    large: '/assets/van-gogh-self-portrait/hero-large.jpg'
                },
                gallery: '/assets/van-gogh-self-portrait/gallery.jpg'
            }
        },
        {
            id: 8,
            name: 'The Sleeping Gypsy',
            year: 1897,
            description: `The Sleeping Gypsy (French: La Bohémienne endormie) is an 1897 oil painting by French Naïve artist Henri Rousseau (1844–1910). 
      It is a fantastical depiction of a lion musing over a sleeping woman on a moonlit night. 
      Rousseau first exhibited the painting at the 13th Salon des Indépendants, and tried unsuccessfully to sell it to the mayor of his hometown, Laval. 
      Instead, it entered the private collection of a Parisian charcoal merchant where it remained until 1924, when it was discovered by the art critic Louis Vauxcelles.`,
            source: 'https://en.wikipedia.org/wiki/The_Sleeping_Gypsy',
            artist: {
                image: '/assets/the-sleeping-gypsy/artist.jpg',
                name: 'Henri Rousseau'
            },
            images: {
                thumbnail: '/assets/the-sleeping-gypsy/thumbnail.jpg',
                hero: {
                    small: '/assets/the-sleeping-gypsy/hero-small.jpg',
                    large: '/assets/the-sleeping-gypsy/hero-large.jpg'
                },
                gallery: '/assets/the-sleeping-gypsy/gallery.jpg'
            }
        },
        {
            id: 9,
            name: 'Lady with an Ermine',
            year: 1489,
            description: `Lady with an Ermine is a painting by Leonardo da Vinci, from around 1489–1490 and one of Poland's national treasures. 
      The work is one of only four female portraits painted by Leonardo, the others being the Mona Lisa, Ginevra de' Benci, and La Belle Ferronnière. 
      The small portrait generally is accepted as a depiction of Cecilia Gallerani, a young woman in the Milanese court who was the mistress of Ludovico Sforza, Duke of Milan. 
      The animal resting in her arms is generally supposed to be an ermine, a traditional symbol of purity, which also was used as a personal device by Ludovico Sforza.`,
            source: 'https://en.wikipedia.org/wiki/Lady_with_an_Ermine',
            artist: {
                image: '/assets/lady-with-an-ermine/artist.jpg',
                name: 'Leonardo da Vinci'
            },
            images: {
                thumbnail: '/assets/lady-with-an-ermine/thumbnail.jpg',
                hero: {
                    small: '/assets/lady-with-an-ermine/hero-small.jpg',
                    large: '/assets/lady-with-an-ermine/hero-large.jpg'
                },
                gallery: '/assets/lady-with-an-ermine/gallery.jpg'
            }
        },
        {
            name: 'The Night Café',
            year: 1888,
            id: 10,
            description: `The Night Café (French: Le Café de nuit) is an oil painting created by Dutch artist Vincent van Gogh in September 1888 in Arles. 
      Its title is inscribed lower right beneath the signature. The interior depicted is the Café de la Gare, 30 Place Lamartine, run by Joseph-Michel Ginoux and his wife Marie, who posed for Van Gogh's paintings The Portrait of Madame Ginoux and The Night Café.`,
            source: 'https://en.wikipedia.org/wiki/The_Night_Café',
            artist: {
                image: '/assets/the-night-cafe/artist.jpg',
                name: 'Vincent Van Gogh'
            },
            images: {
                thumbnail: '/assets/the-night-cafe/thumbnail.jpg',
                hero: {
                    small: '/assets/the-night-cafe/hero-small.jpg',
                    large: '/assets/the-night-cafe/hero-large.jpg'
                },
                gallery: '/assets/the-night-cafe/gallery.jpg'
            }
        },
        {
            name: 'Mona Lisa',
            year: 1503,
            id: 11,
            description: `The Mona Lisa is a half-length portrait painting by Italian artist Leonardo da Vinci. 
      It is considered an archetypal masterpiece of the Italian Renaissance, and has been described as "the best known, the most visited, the most written about, the most sung about, the most parodied work of art in the world". 
      The painting's novel qualities include the subject's enigmatic expression, the monumentality of the composition, the subtle modelling of forms, and the atmospheric illusionism.`,
            source: 'https://en.wikipedia.org/wiki/Mona_Lisa',
            artist: {
                image: '/assets/mona-lisa/artist.jpg',
                name: 'Leonardo da Vinci'
            },
            images: {
                thumbnail: '/assets/mona-lisa/thumbnail.jpg',
                hero: {
                    small: '/assets/mona-lisa/hero-small.jpg',
                    large: '/assets/mona-lisa/hero-large.jpg'
                },
                gallery: '/assets/mona-lisa/gallery.jpg'
            }
        },
        {
            id: 12,
            name: 'The Basket of Apples',
            year: 1893,
            description: `The Basket of Apples is a still life oil painting by French post-impressionist artist Paul Cézanne. 
      It belongs to the Helen Birch Bartlett Memorial Collection of the Art Institute of Chicago. 
      The piece is often noted for its disjointed perspective.`,
            source: 'https://en.wikipedia.org/wiki/The_Basket_of_Apples',
            artist: {
                image: '/assets/the-basket-of-apples/artist.jpg',
                name: 'Paul Cézanne'
            },
            images: {
                thumbnail: '/assets/the-basket-of-apples/thumbnail.jpg',
                hero: {
                    small: '/assets/the-basket-of-apples/hero-small.jpg',
                    large: '/assets/the-basket-of-apples/hero-large.jpg'
                },
                gallery: '/assets/the-basket-of-apples/gallery.jpg'
            }
        },
        {
            id: 13,
            name: 'The Boy in the Red Vest',
            year: 1889,
            description: `The Boy in the Red Vest, also known as The Boy in the Red Waistcoat, is a painting (measuring 79.5 by 64 cm) by the Swiss artist Paul Cézanne, 
      painted in 1889 or 1890, and exhibited in 1895 at the Paris gallery of Ambroise Vollard.`,
            source: 'https://en.wikipedia.org/wiki/The_Boy_in_the_Red_Vest',
            artist: {
                image: '/assets/the-boy-in-the-red-vest/artist.jpg',
                name: 'Paul Cézanne'
            },
            images: {
                thumbnail: '/assets/the-boy-in-the-red-vest/thumbnail.jpg',
                hero: {
                    small: '/assets/the-boy-in-the-red-vest/hero-small.jpg',
                    large: '/assets/the-boy-in-the-red-vest/hero-large.jpg'
                },
                gallery: '/assets/the-boy-in-the-red-vest/gallery.jpg'
            }
        },
        {
            id: 14,
            name: 'Arnolfini Portrait',
            year: 1434,
            description: `The Arnolfini Portrait is a 1434 oil painting on oak panel by the Early Netherlandish painter Jan van Eyck. 
      It forms a full-length double portrait, believed to depict the Italian merchant Giovanni di Nicolao di Arnolfini and his wife, 
      presumably in their residence at the Flemish city of Bruges.`,
            source: 'https://en.wikipedia.org/wiki/Arnolfini_Portrait',
            artist: {
                image: '/assets/arnolfini-portrait/artist.jpg',
                name: 'Jan van Eyck'
            },
            images: {
                thumbnail: '/assets/arnolfini-portrait/thumbnail.jpg',
                hero: {
                    small: '/assets/arnolfini-portrait/hero-small.jpg',
                    large: '/assets/arnolfini-portrait/hero-large.jpg'
                },
                gallery: '/assets/arnolfini-portrait/gallery.jpg'
            }
        },
        {
            id: 15,
            name: 'The Sleeping Gypsy',
            year: 1897,
            description: `The Sleeping Gypsy (French: La Bohémienne endormie) is an 1897 oil painting by French Naïve artist Henri Rousseau (1844–1910). 
      It is a fantastical depiction of a lion musing over a sleeping woman on a moonlit night. 
      Rousseau first exhibited the painting at the 13th Salon des Indépendants, and tried unsuccessfully to sell it to the mayor of his hometown, Laval. 
      Instead, it entered the private collection of a Parisian charcoal merchant where it remained until 1924, when it was discovered by the art critic Louis Vauxcelles.`,
            source: 'https://en.wikipedia.org/wiki/The_Sleeping_Gypsy',
            artist: {
                image: '/assets/the-sleeping-gypsy/artist.jpg',
                name: 'Henri Rousseau'
            },
            images: {
                thumbnail: '/assets/the-sleeping-gypsy/thumbnail.jpg',
                hero: {
                    small: '/assets/the-sleeping-gypsy/hero-small.jpg',
                    large: '/assets/the-sleeping-gypsy/hero-large.jpg'
                },
                gallery: '/assets/the-sleeping-gypsy/gallery.jpg'
            }
        },
        {
            id: 16,
            name: 'The Basket of Apples',
            year: 1893,
            description: `The Basket of Apples is a still life oil painting by French post-impressionist artist Paul Cézanne. 
      It belongs to the Helen Birch Bartlett Memorial Collection of the Art Institute of Chicago. 
      The piece is often noted for its disjointed perspective.`,
            source: 'https://en.wikipedia.org/wiki/The_Basket_of_Apples',
            artist: {
                image: '/assets/the-basket-of-apples/artist.jpg',
                name: 'Paul Cézanne'
            },
            images: {
                thumbnail: '/assets/the-basket-of-apples/thumbnail.jpg',
                hero: {
                    small: '/assets/the-basket-of-apples/hero-small.jpg',
                    large: '/assets/the-basket-of-apples/hero-large.jpg'
                },
                gallery: '/assets/the-basket-of-apples/gallery.jpg'
            }
        }
    ]);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route
                        index
                        path="/"
                        element={<Gallery artData={artData} />}
                    ></Route>
                    <Route
                        path="/:id"
                        element={<PhotoDetails artData={artData} />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
