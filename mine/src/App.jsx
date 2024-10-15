import  { useEffect, useState } from "react";
import "./App.css";
import About from "./components/about";
import MenuIcon from "@mui/icons-material/Menu"; // Menu icon for mobile drawer toggle
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";


const App = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };
  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS("particles-js", {
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000",
            },
          },
          opacity: {
            value: 0.5,
            random: false,
          },
          size: {
            value: 3,
            random: true,
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
        },
        retina_detect: true,
      });
    }
  }, []);

  return (
    <div className="app">
      <header>
        <nav className="container">
          <h2 className="text-3xl text-nowrap">Mamush Meshesha</h2>

          <div className="nav-links md:block hidden">
            <a href="/">Home</a>
            <a href="/projects">Projects</a>
            <a href="/contact">Contact</a>
          </div>

          <div className="md:hidden">
            <IconButton
              onClick={toggleDrawer(true)}
              edge="start"
              aria-label="menu"
            >
              <MenuIcon className="text-3xl" />
            </IconButton>
          </div>
        </nav>

        <Drawer
          anchor="bottom"
          open={isDrawerOpen}
          onClose={toggleDrawer(false)}
          sx={{ "& .MuiDrawer-paper": { padding: "20px" , borderTopRightRadius: "30px", borderTopLeftRadius: "30px"} }} 
        >
          <List>
            <ListItem
              button
              component="a"
              href="/"
              onClick={toggleDrawer(false)}
            >
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem
              button
              component="a"
              href="/projects"
              onClick={toggleDrawer(false)}
            >
              <ListItemText primary="Projects" />
            </ListItem>
            <ListItem
              button
              component="a"
              href="/contact"
              onClick={toggleDrawer(false)}
            >
              <ListItemText primary="Contact" />
            </ListItem>
          </List>
        </Drawer>
      </header>

      <main>
        <section id="hero">
          <div id="particles-js"></div>
          <div className="hero-content leading-loose">
            <h1 className="text-3xl">Mamush Meshesha</h1>
            <div className="typewriter text-3xl md:text-5xl py-4">Full Stack Developer</div>
            <a href="/projects" className="cta-button">
              View My Work
            </a>
          </div>
        </section>
      </main>
      {/* components */}
      <div>
        <About />
      </div>
    </div>
  );
};

export default App;
