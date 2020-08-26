import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ColbyImage extends Component {
    static propTypes = {
        /** An object of source information, like main, and thumbnail (not supported yet) */
        src: PropTypes.object.isRequired,

        /** The alt text for the image */
        altText: PropTypes.string.isRequired,

        /** Whether to use a lightbox or not */
        useLightbox: PropTypes.bool,

        /** The id of the gallery */
        lightboxGallery: PropTypes.string,

        /** The image source for the lightbox */
        lightboxSrc: PropTypes.string,
    };

    static defaultProps = {
        useLightbox: true,
        lightboxGallery: '',
        lightboxSrc: '',
    };

    render() {
        if (!this.props.useLightbox) {
            return <img src={this.props.src.main} className="img-fluid" alt={this.props.altText} />;
        }

        return (
            <a
                data-fslightbox={
                    this.props.lightboxGallery ? this.props.lightboxGallery : 'gallery'
                }
                href={this.props.lightboxSrc}
                data-type="image"
            >
                <img src={this.props.src.main} className="img-fluid" alt={this.props.altText} />
            </a>
        );
    }
}
