import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import { AppState } from '@simbad-client/app/core/core.module';
import { formReducer } from './configuration-editor/store/form.reducer';
import { ConfigurationFormState } from './configuration-editor/store/form.model';
import {
    simulationPipelineReducer,
    SimulationPipelineState
} from '@simbad-simulation/lib/simulation-pipeline/core/store/simulation/simulation-pipeline.reducer';

export const FEATURE_NAME = 'simulation';
export const selectSimulationState = createFeatureSelector<State, SimulationState>(FEATURE_NAME);

export const selectSimulationPipelineState = createSelector(
    selectSimulationState,
    (state: SimulationState) => state.simulation
);
export const reducers: ActionReducerMap<SimulationState> = {
    form: formReducer,
    simulation: simulationPipelineReducer
};

export interface SimulationState {
    form: ConfigurationFormState;
    simulation: SimulationPipelineState;
}

export interface State extends AppState {
    simulation: SimulationState;
}
