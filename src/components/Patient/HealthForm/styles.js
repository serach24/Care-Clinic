export const styles = theme => ({
    formroot: {
        display:"flex",
        flexWrap:"wrap",
        width:902,
        margin:"10px auto",
        backgroundColor: 'white',
        border: '2px solid grey',
        borderRadius: '5px'
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 230,
        '&$disabled': {
            color:'black'
          }
    },
    disabled: {},
    textFieldFull: {
        margin: 8,
        width: 640,
        '&$disabledFull': {
            color:'black'
          }
    },
    disabledFull: {},
    headerMain: {
        textAlign: 'center',
        margin: 'auto'
    },
    header: {
        width:960,
        margin:8
    },
    button: {
        width:100,
        margin:"8px auto"
    },
    submitButton: {
        width: 100
    },
    addButton: {
        width:32,
        marginLeft:8,
        margin: 8
    },
    
});