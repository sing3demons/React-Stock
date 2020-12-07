import { Grid, makeStyles } from '@material-ui/core'
import { Book, CameraAlt, Computer, Headset, InvertColors, Nature, Visibility, Watch } from '@material-ui/icons'
import React from 'react'
import CategoryItem from './CategoryItem'

const CATEGORIES = [
    {
        title: 'Headphone',
        Icon: Headset,
    },
    {
        title: 'Watch',
        Icon: Watch,
    },
    {
        title: 'Camera',
        Icon: CameraAlt,
    },
    {
        title: 'Nature',
        Icon: Nature,
    },
    {
        title: 'Computer',
        Icon: Computer,
    },
    {
        title: 'Book',
        Icon: Book,
    },
    {
        title: 'Lotion',
        Icon: InvertColors,
    },
    {
        title: 'Eteglass',
        Icon: Visibility,
    },
]

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(2),
    },
}))

export default function CategoryList() {
    const classes = useStyles()
    return (
    <Grid container justify="center" spacing={2} className={classes.root}>
        {
            CATEGORIES.map((category) => (<CategoryItem key={category.title} {...category}></CategoryItem>))
        }
    </Grid>
    )
}
