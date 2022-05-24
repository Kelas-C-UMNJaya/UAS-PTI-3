import React from "react";
import ReactDOM from "react";
import { DropdownMultiple, Dropdown } from 'react-bootstrap-dropdown-multiple';



class App extends Component {
    constructor() {
        super();
        this.state = {
            studi: [
                {
                    label: 'Informatika',
                    value: 'informatika',
                },
                {
                    label: 'Teknik Komputer',
                    value: 'teknik komputer',
                },
                {
                    label: 'Teknik Elektro',
                    value: 'teknik elektro',
                },
                {
                    label: 'Teknik Fisika',
                    value: 'teknik fisika',
                },
                {
                    label: 'Sistem Informasi',
                    value: 'siste infomasi',
                },
            ],
        };
    }

    componentDidMount() {
        window.addEventListener('keydown', this.tabKeyPressed);
        window.addEventListener('mousedown', this.mouseClicked);
    }

    tabKeyPressed = (e) => {
        if (e.keyCode === 9) {
            document.querySelector('body').classList.remove('noFocus');
            window.removeEventListener('keydown', this.tabKeyPressed);
            window.addEventListener('mousedown', this.mouseClicked);
        }
    }

    mouseClicked = () => {
        document.querySelector('body').classList.add('noFocus');
        window.removeEventListener('mousedown', this.mouseClicked);
        window.addEventListener('keydown', this.tabKeyPressed);
    }

    onChange = (item, name) => { console.log(item, name); }

    render() {
        const { studi } = this.state;

        return (
            <div className="App">
                <Dropdown
                    name="program studi"
                    searchable={['Cari Studi', 'Tidak Studi']}
                    title="Program Studi"
                    list={studi}
                    onChange={this.onChange}
                />
            </div>
        );
    }
}

export default App;