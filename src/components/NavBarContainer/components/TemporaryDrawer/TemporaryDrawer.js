import React,{useState} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Home,Store,FormatListBulleted,Shop,Message,ExpandLess,ExpandMore,LabelImportant} from '@material-ui/icons';
import { Link } from 'react-router-dom';
import Collapse from '@material-ui/core/Collapse';


const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  nested: {
    paddingLeft: theme.spacing(4),
  }
}));

const itemsMenu = [
  {
    title: "Inicio",
    icon: <Home />,
    link: "/"
  },
  {
    title: "Tienda",
    icon: <Shop />,
    link: "/tienda"
  },
  {
    title: "Local",
    icon: <Store />,
    link: "/local"
  },
  {
    title: "Contacto",
    icon: <Message />,
    link: "/contacto"
  },
  {
    title: "Categorias",
    icon: <FormatListBulleted />,
    link: "/categorias"
  }
];

const categories = [
  {
    title: "Sabanas",
    icon: <LabelImportant />,
    link: "/category/1"
  },
  {
    title: "Acolchados",
    icon: <LabelImportant />,
    link: "/category/2"
  },
  {
    title: "Frazadas",
    icon: <LabelImportant />,
    link: "/category/3"
  },
  {
    title: "Cubrecamas",
    icon: <LabelImportant />,
    link: "/category/4"
  },
  {
    title: "Toallas y toallones",
    icon: <LabelImportant />,
    link: "/category/5"
  },
  {
    title: "Decoración",
    icon: <LabelImportant />,
    link: "/category/6"
  },
  {
    title: "Baño",
    icon: <LabelImportant />,
    link: "/category/7"
  },
  {
    title: "Cocina",
    icon: <LabelImportant />,
    link: "/category/8"
  },
  {
    title: "Almohadas",
    icon: <LabelImportant />,
    link: "/category/9"
  }
]

export const TemporaryDrawer = ({children}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleClick = () => {
    setOpen(!open);
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {itemsMenu.map((item, i) => (
            item.title === "Categorias" ? 
                <ListItem button onClick={handleClick} key={i}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.title}/>
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
              :
                <Link to={item.link} key={i}>
                  <ListItem button>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.title} />
                  </ListItem>
                </Link>
        ))}
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {categories.map((category,i) => (
              <Link to={category.link} key={i}>
                <ListItem button className={classes.nested} key={i}>
                  <ListItemIcon key={i}>{category.icon}</ListItemIcon>
                  <ListItemText primary={category.title} key={i} />
                </ListItem>
              </Link>
              ))}
          </List>
        </Collapse>
      </List>
    </div>
  );

  return (
    <div>
      {['top'].map((anchor) => (
        <React.Fragment key={anchor}>
          <div onClick={toggleDrawer(anchor, true)}>{children}</div>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}