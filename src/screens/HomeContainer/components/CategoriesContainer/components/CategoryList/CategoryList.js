import { makeStyles } from '@material-ui/core';
import { categoryListStyle } from './CategoryListStyle';
import { Link } from 'react-router-dom';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => categoryListStyle(theme));

export const CategoryList = ({ categories }) => {
    const classes = useStyles();

    return <section className={classes.container}>
        <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">Categorias</InputLabel>
            <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            label="Categorias"
            SelectDisplayProps={categories.nombre}
            defaultValue = ""
            className={classes.select}
            >
                <Link to={`/`}>
                    <MenuItem value="Sin categoria">
                        Sin categoria
                    </MenuItem>
                </Link>
                {categories.map((category,i) => 
                    <Link to={`/category/${category.id}`}>
                        <MenuItem value={category.nombre} key={i}>
                            {category.nombre}
                        </MenuItem>
                    </Link>
                )}
            </Select>
        </FormControl>
    </section>

}
