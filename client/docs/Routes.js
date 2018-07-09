import React from 'react';
import {BrowserRouter as Router, Route, Switch, browserHistory } from 'react-router-dom';

// FREE
import HomePage from './pages/HomePage';
import ButtonPage from './pages/ButtonPage';
import CSSPage from './pages/CSSPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DashboardPage from './pages/DashboardPage';
import FormEmployeePage from './pages/FormEmployeePage';

import AboutUs from './pages/AboutUs';

// import Employee from './pages/Employee';

import TablePage from './pages/TablePage';
import BadgePage from './pages/BadgePage';
import BreadcrumbPage from './pages/BreadcrumbPage';
import FaPage from './pages/FaPage';
import ComponentsPage from './pages/ComponentsPage';
import ModalPage from './pages/ModalPage';
import AdvancedPage from './pages/AdvancedPage';
import ProgressPage from './pages/ProgressPage';
import InputPage from './pages/InputPage';
import MediaPage from './pages/MediaPage';
import JumbotronPage from './pages/JumbotronPage';
import AlertPage from './pages/AlertPage';
import CardsPage from './pages/CardsPage';
import PaginationPage from './pages/PaginationPage';
import PopoverPage from './pages/PopoverPage';
import ListGroupPage from './pages/ListGroupPage';
import CarouselPage from './pages/CarouselPage';
import PanelPage from'./pages/PanelPage';
import CollapsePage from './pages/CollapsePage';
import TooltipsPage from './pages/TooltipsPage';
import FooterPage from './pages/FooterPage';
import MasksPage from './pages/MasksPage';
import DropdownPage from './pages/DropdownPage';
import VideoCarouselPage from './pages/VideoCarouselPage';
import HoverPage from './pages/HoverPage';
import FormsPage from './pages/FormsPage';
import ChartsPage from './pages/ChartsPage';
import SearchPage from './pages/SearchPage';

// PRO
import AutocompletePage from './pages/pro/AutocompletePage';
import ButtonPagePro from './pages/pro/ButtonPage';
import ChartsPagePro from './pages/pro/ChartsPage';
import InputPagePro from './pages/pro/InputPage';
import CollapsePagePro from './pages/pro/CollapsePage';
import ScrollBarPage from './pages/pro/ScrollBarPage';
import ScrollSpyPage from './pages/pro/ScrollSpyPage';
import SelectPage from './pages/pro/SelectPage';
import SideNavPage from './pages/pro/SideNavPage';
import DatePickerPage from './pages/pro/DatePickerPage';
import DoubleNavigationPage from './pages/pro/DoubleNavigationPage';
import TimePickerPage from './pages/pro/TimePickerPage';
import StickyPage from './pages/pro/StickyPage';
import LightboxPage from './pages/pro/LightboxPage';
import MultiCarouselPage from './pages/pro/MultiCarouselPage';
import ProgressPagePro from './pages/pro/ProgressPage';
import TabsPage from './pages/pro/TabsPage';
import ThumbnailsCarousel from './pages/pro/ThumbnailsCarousel';
import SectionsPage from './pages/pro/sections/SectionsPage';
import TestimonialsPage from './pages/pro/sections/TestimonialsPage';
import TestimonialsMultiPage from './pages/pro/sections/TestimonialsMultiPage';
import EcommercePage from './pages/pro/sections/EcommercePage';
import AppPage from './pages/pro/sections/AppPage';
import ContactFormPage from './pages/pro/sections/ContactFormPage';
import ClassicFormPage from './pages/pro/sections/ClassicFormPage';
import VideoBackgroundPage from './pages/pro/sections/VideoBackgroundPage';
import ProjectsPage from './pages/pro/sections/ProjectsPage';
import FeaturesPage from './pages/pro/sections/FeaturesPage';
import ContactPage from './pages/pro/sections/ContactPage';
import SocialButtonsPage from './pages/pro/SocialButtonsPage';
import BlogPage from './pages/pro/sections/BlogPage';
import TeamPage from'./pages/pro/sections/TeamPage';
import MagazinePage from'./pages/pro/sections/MagazinePage';
import SocialPage from'./pages/pro/sections/SocialPage';
import FormsPagePro from './pages/pro/FormsPage';
import CardsPagePro from'./pages/pro/CardsPage';
import SearchPagePro from './pages/pro/SearchPage';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        {/* FREE */}
        <Route exact path='/' component={HomePage} />
        <Route exact path='/css' component={CSSPage} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/signup' component={SignupPage} />
        <Route exact path='/dashboard' component={DashboardPage} />
        {/* <Route exact path='/employee' component={Employee} /> */}
        <Route exact path='/employeeform' component={FormEmployeePage} />
        <Route exact path='/aboutus' component={AboutUs} />
        <Route exact path='/css/table' component={TablePage} />
        <Route exact path='/components' component={ComponentsPage} />
        <Route path='/components/badge' component={BadgePage} />
        <Route path='/components/breadcrumb' component={BreadcrumbPage} />
        <Route path='/components/media' component={MediaPage} />
        <Route path='/components/input' component={InputPage} />
        <Route path='/components/alert' component={AlertPage} />
        <Route path='/components/dropdown' component={DropdownPage} />
        <Route path='/css/icons' component={FaPage} />
        <Route path='/css/jumbotron' component={JumbotronPage} />
        <Route path='/components/cards' component={CardsPage} />
        <Route path='/components/buttons' component={ButtonPage} />
        <Route path='/components/forms' component={FormsPage} />
        <Route path='/components/progress' component={ProgressPage} />
        <Route path='/components/popover' component={PopoverPage} />
        <Route path='/components/pagination' component={PaginationPage} />
        <Route path='/components/list-group' component={ListGroupPage} />
        <Route path='/components/tooltips' component={TooltipsPage} />
        <Route path='/components/footer' component={FooterPage} />
        <Route exact path='/advanced' component={AdvancedPage} />
        <Route path='/advanced/modal' component={ModalPage} />
        <Route path='/advanced/carousel' component={CarouselPage} />
        <Route path='/advanced/collapse' component={CollapsePage} />
        <Route path='/advanced/videocarousel' component={VideoCarouselPage} />
        <Route path='/css/masks' component={MasksPage} />
        <Route path='/css/hover' component={HoverPage} />
        <Route path='/advanced/videocarousel' component={VideoCarouselPage} />
        <Route path='/advanced/charts' component={ChartsPage} />
        <Route path='/components/panels' component={PanelPage} />
        <Route path='/components/search' component={SearchPage} />
        {/* PRO */}
        <Route path='/components/pro/autocomplete' component={AutocompletePage} />
        <Route path='/advanced/pro/charts' component={ChartsPagePro} />
        <Route path='/components/pro/buttons' component={ButtonPagePro} />
        <Route path='/advanced/pro/collapse' component={CollapsePagePro} />
        <Route path='/components/pro/input' component={InputPagePro} />
        <Route path='/advanced/pro/sidenav' component={SideNavPage} />
        <Route path='/advanced/pro/select' component={SelectPage} />
        <Route path='/advanced/pro/datepicker' component={DatePickerPage} />
        <Route path='/advanced/pro/timepicker' component={TimePickerPage} />
        <Route path='/advanced/pro/lightbox' component={LightboxPage} />
        <Route path='/advanced/pro/multicarousel' component={MultiCarouselPage} />
        <Route path='/components/pro/progress' component={ProgressPagePro} />
        <Route path='/advanced/pro/scrollbar' component={ScrollBarPage} />
        <Route path='/advanced/pro/scrollspy' component={ScrollSpyPage} />
        <Route path='/advanced/pro/sticky' component={StickyPage} />
        <Route path='/components/pro/tabs' component={TabsPage} />
        <Route path='/advanced/pro/thumbnailscarousel' component={ThumbnailsCarousel} />
        <Route path='/css/pro/double' component={DoubleNavigationPage} />
        <Route path='/components/pro/socialbuttons' component={SocialButtonsPage} />
        <Route path='/components/pro/forms' component={FormsPagePro} />
        <Route path='/components/pro/cards' component={CardsPagePro} />
        <Route path='/components/pro/search' component={SearchPagePro} />
        {/* PRO SECTIONS */}
        <Route path='/sections' component={SectionsPage} />
        <Route path='/pro/sections/testimonials' component={TestimonialsPage} />
        <Route path='/pro/sections/testimonialsMulti' component={TestimonialsMultiPage} />
        <Route path='/pro/sections/ecommerce' component={EcommercePage} />
        <Route path='/pro/sections/app' component={AppPage} />
        <Route path='/pro/sections/contactform' component={ContactFormPage} />
        <Route path='/pro/sections/classicform' component={ClassicFormPage} />
        <Route path='/pro/sections/videobackground' component={VideoBackgroundPage} />
        <Route path='/pro/sections/projects' component={ProjectsPage} />
        <Route path='/pro/sections/features' component={FeaturesPage} />
        <Route path='/pro/sections/contact' component={ContactPage} />
        <Route path='/pro/sections/blog' component={BlogPage} />
        <Route path='/pro/sections/team' component={TeamPage} />
        <Route path='/pro/sections/magazine' component={MagazinePage} />
        <Route path='/pro/sections/social' component={SocialPage} />
        <Route render = { function() {
          return <h1>Not Found</h1>;
        }} />
      </Switch>
    );
  }
}

export default Routes;
