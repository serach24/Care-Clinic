import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
    footer: {
        position: 'absolute',
        bottom:0,
        // top: '-3px',
        // zIndex: '1',
        paddingTop: '34px',
        paddingBottom: '21px',
        marginTop: 'auto'
    },
    footerText: {
        margin: '0 auto',
        maxWidth: 280
    }
}));