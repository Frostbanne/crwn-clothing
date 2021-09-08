import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';
import hats from '../../res/images/hats.png'
import jackets from '../../res/images/jackets.png'
import sneakers from '../../res/images/sneakers.png'
import womens from '../../res/images/womens.png'
import men from '../../res/images/men.png'






class Directory extends React.Component {
    constructor() {
        super();

        
        this.state = {
            sections: [
                {
                  title: 'hats',
                //   imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  imageUrl: hats,
                  id: 1,
                  linkUrl: 'hats'
                },
                {
                  title: 'jackets',
                  // imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  imageUrl: jackets,
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'sneakers',
                  // imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  imageUrl: sneakers,
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'womens',
                  // imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  imageUrl: womens,
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'mens',
                  // imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  imageUrl: men,
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens'
                }
              ]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({ id, ...otherSectionProps }) => (
                        <MenuItem key={id} {...otherSectionProps} />
                    ))
                }
            </div>
        )
    }
}

export default Directory;