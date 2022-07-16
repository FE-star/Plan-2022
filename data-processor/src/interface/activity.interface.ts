import { Observable } from 'rxjs';

export interface ActivityRequest {
	id: string
}

export interface MultiActivity {
	activitys: string[]
}

export interface ActivityResponse {
	id: string
	offer: Offer[]
}

export interface Offer {
	nid: string
	title: string
	pictUrl: string
	icons: Icon[]
}

export interface Icon {
	type: string
	bgColor: string
	borderColor: string
	fontColor: string
	text: string
	source: string
}

export interface ActivityService {
    Call(req: ActivityRequest): Observable<ActivityResponse>
}