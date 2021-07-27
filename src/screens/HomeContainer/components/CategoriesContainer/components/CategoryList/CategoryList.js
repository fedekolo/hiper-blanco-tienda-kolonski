import { makeStyles } from '@material-ui/core';
import { categoryListStyle } from './CategoryListStyle';
import { Category } from '../Category/Category';
import { Link } from 'react-router-dom';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => categoryListStyle(theme));

export const CategoryList = ({ categories }) => {
    const classes = useStyles();

    return <section className={classes.container}>
        <div className={classes.cardsCategories}>
            {categories.map((category,i) => 
                <Link to={`/category/${category.id}`} key={i}>
                    <Category 
                        key={i}
                        category={category}
                    />
                </Link>
            )}
        </div>
        <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">Categorias</InputLabel>
            <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            label="Categorias"
            SelectDisplayProps={categories.name}
            defaultValue = ""
            className={classes.select}
            >
                {categories.map((category,i) => 
                    <MenuItem value={category.name} key={i}>
                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </MenuItem>
                )}
            </Select>
        </FormControl>
    </section>

}
