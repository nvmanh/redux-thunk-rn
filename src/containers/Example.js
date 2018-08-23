import { connect } from 'react-redux';
import ExampleView from './../components/ExampleView';

const mapStateToProps = (state) => ({ //eslint-disable-line
    //state to view props here
});
const Example = connect(mapStateToProps, {
    // your func to connect from view to container
})(ExampleView);

export default Example;