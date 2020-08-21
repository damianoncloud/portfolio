import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="langing-grid">
                    <Cell col={12}>
                        <img 
                            src="https://lh3.googleusercontent.com/proxy/6IYxfzz0c6zBbX3WspGwiA47MTwq2woemZgujZMRt_ocYzEnwc96_bFsA4I1ukSc-BESAqxNdJHeuSguDKqbokMV01CCMC9sUm-c6FzcIF6bGvdrGUirjQ"
                            alt="avatar"
                            className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>

                            <hr/>
                            <p>HTML/CSS | Bootstrap | JavaScript | React | Ruby | MongoDB</p>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;