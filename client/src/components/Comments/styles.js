import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
    floor: {
        float: 'right',
        textAlign: 'right',
    },
    cell: {
        padding: '10px',
        fontSize: '14px',
        lineHeight: '150%',
        textAlign: 'left',
        borderBottom: '1px solid var(--box-border-color)',
    },
    avatar: {
        borderRadius: '4px',
        verticalAlign: 'bottom',
    },
    divid3: {
        height: '3px'
    },
    divid5: {
        height: '3px'
    },
    dateTime: {
        fontSize: '11px',
        color: '#ccc',
        cursor: 'pointer',
    },
    replyContent: {
        fontSize: "14px",
        lineHeight: "1.6",
        color: "#000",
        wordBreak: "break-word",
    },
    textArea: {
        width: '100%'
    },
    replyButton: {

    },
    field: {
        padding: 10,
        display: 'flex'
    }
}));