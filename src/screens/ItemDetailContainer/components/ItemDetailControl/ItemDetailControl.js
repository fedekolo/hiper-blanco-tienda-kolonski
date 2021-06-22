import { makeStyles } from '@material-ui/core';
import { itemDetailControlStyle } from './ItemDetailControlStyle';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { ItemCount } from '../ItemCount/ItemCount'

const useStyles = makeStyles((theme) => itemDetailControlStyle(theme));

export const ItemDetailControl = ({ item }) => {
    const classes = useStyles();

    return <section className={classes.container}>
        <div>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Color</InputLabel>
                <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={item[0].colors}
                label="Color"
                >
                    {item[0].colors.map((color,i) => 
                        <MenuItem value={color} key={i}>{color}</MenuItem>
                    )}
                </Select>
            </FormControl>
            <ItemCount stock="8" initial="1" />
        </div>
        <Button variant="contained" disableElevation>
            Agregar al carrito
        </Button>
    </section>

}
