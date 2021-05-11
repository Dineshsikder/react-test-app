import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(4),
            textAlign: 'center',
            margin: theme.spacing(2)
        },
        childPaper: {
            padding: theme.spacing(4),
            margin: theme.spacing(2)
        },
        header: {
            fontWeight: 'bold',
            fontSize: 30,
            marginBottom: '2%'
        },
        text: {
            fontWeight: 'bold',
            fontSize: 16,
            marginBottom: '2%',
            textAlign: 'initial'
        },
        displayMap: {
            display: 'flex'
        },
        mapText: {
            fontSize: 16,
            textAlign: 'initial',
            marginRight: 5
        },
        textFileLabel: {
            fontSize: 16,
            fontWeight: 'bold',
            textAlign: 'center'
        },
        button: {
            borderColor: 'black',
            height: 20,
            marginRight: 5
        }
    }),
);

export { useStyles }