import React from 'react';
import If from '../functionalcomponents/if'

export default props => (
    <If test={!props.hide}>
        <button className={'btn btn-'+props.btnClass} onClick={props.onClick}>
            <i className={'fa fa-'+props.iconClass}></i>
        </button>
    </If>
)