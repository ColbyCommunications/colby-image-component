/* eslint-disable no-else-return */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProgressiveImage from 'react-progressive-image';

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

        /** Whether to lazy load the image or not */
        lazyLoad: PropTypes.bool,
    };

    static defaultProps = {
        useLightbox: true,
        lightboxGallery: '',
        lightboxSrc: '',
        lazyLoad: false,
    };

    render() {
        let renderElement;

        if (this.props.lazyLoad && this.props.useLightbox) {
            renderElement = (
                <a
                    data-fslightbox={
                        this.props.lightboxGallery ? this.props.lightboxGallery : 'gallery'
                    }
                    href={this.props.lightboxSrc}
                    data-type="image"
                >
                    <ProgressiveImage
                        src={this.props.src.main}
                        placeholder={this.props.src.thumbnail}
                    >
                        {(src, loading) => (
                            <img
                                style={{
                                    ...{ filter: 'none' },
                                    width: '100%',
                                    filter: loading ? 'blur(3px)' : 'none',
                                    transition: 'filter 100ms ease-in',
                                }}
                                src={src}
                                className="img-fluid"
                                alt={this.props.altText}
                            />
                        )}
                    </ProgressiveImage>
                </a>
            );
        } else if (this.props.lazyLoad && !this.props.useLightbox) {
            renderElement = (
                <ProgressiveImage src={this.props.src.main} placeholder={this.props.src.thumbnail}>
                    {(src, loading) => (
                        <img
                            style={{
                                ...{ filter: 'none' },
                                width: '100%',
                                filter: loading ? 'blur(3px)' : 'none',
                                transition: 'filter 100ms ease-in',
                            }}
                            src={src}
                            className="img-fluid"
                            alt={this.props.altText}
                        />
                    )}
                </ProgressiveImage>
            );
        } else if (!this.props.lazyLoad && this.props.useLightbox) {
            renderElement = (
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
        } else {
            renderElement = (
                <img src={this.props.src.main} className="img-fluid" alt={this.props.altText} />
            );
        }

        return renderElement;
    }
}
