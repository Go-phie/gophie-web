import styled from 'styled-components';
import Carousel from 'react-multi-carousel';

const Style = {
	TrendingMainCarousel: styled(Carousel)`
		.react-multi-carousel-item--active {
			&:not(:last-child) {
				margin-right: 1.1em;
			}
		}

		.network-icon {
			margin: 0 !important;
		}

		.movie-size {
			font-size: 0.67em;
			font-weight: 600;
			text-transform: uppercase;
			position: absolute;
			top: 0;
			right: 0;
			margin: 1.2em;
			color: black;
			background: #fff;
			padding: 0.25em 0.5em;
			border-radius: 0.5em;
			-webkit-transition: 0.3s;
			transition: 0.3s;
		}

		.trending-carousal-image__container {
			position: relative;
			background: linear-gradient(transparent, rgba(0, 0, 0, 0.9));
			min-height: 22em;
			min-width: 5em;
			transition: 0.5s all;
			border-radius: 1em;
			cursor: pointer;

			&:hover {
				content: '';
				position: absolute;
				top: 0;
				background: linear-gradient(transparent, rgba(0, 0, 0, 0.9)) !important;
				left: 0;
				right: 0;
				bottom: 0;
				z-index: -2;
				border-radius: 1em;
				transition: all 0.5s;
			}

			@media (max-width: 1300px) {
				min-height: 18em;
			}

			@media (max-width: 786px) {
				min-height: 16em;
			}

			@media (max-width: 678px) {
				min-height: 15em;
			}
		}

		.trending-carousal-image {
			position: absolute;
			z-index: -1;
			width: 100%;
			height: 100%;
			max-height: 25em;
			object-fit: cover;
			border-radius: 1em;
			cursor: pointer;
		}

		.carousel-container {
			min-height: 25em;
			margin-top: 6em;
		}

		.carousal-image-detail {
			position: absolute;
			bottom: 0;
			padding: 1.5em 1em;
			user-select: none;
			display: flex;
			justify-content: space-between;
			align-items: flex-end;
			width: 100%;
			@media (max-width: 678px) {
				padding: 1.1em 0.7em;
			}
			p {
				color: #ffffff;
				font-size: 1em;
				line-height: 1.2;
				margin: initial;
				margin-left: 0.8em;
				text-align: right;

				@media (max-width: 1300px) {
					font-size: 0.85em;
				}
			}

			.carousal-download-btn {
				font-size: 1.1em;
				box-shadow: none !important;
				position: initial !important;
				padding: 0.87em;
				margin: 0;

				@media (max-width: 1300px) {
					padding: 0.8em;
				}
			}
		}

		.react-multiple-carousel__arrow {
			z-index: 100;
		}
	`,

	TrendingLoaderContainer: styled.div`
		overflow: hidden;
		overflow-x: auto;
		scroll-snap-type: x mandatory;
	`,
};

export default Style;
