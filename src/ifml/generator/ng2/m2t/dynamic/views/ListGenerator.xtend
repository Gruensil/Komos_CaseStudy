package ifml.generator.ng2.m2t.dynamic.views;

import IFML.Extensions.impl.ListImpl;
import ifml.generator.ng2.m2t.general.AbstractViewElementGenerator
import java.util.List
import IFML.Extensions.impl.OnSelectEventImpl

public class ListGenerator extends AbstractViewElementGenerator<Iterable<ListImpl>>{
	
	private List<ListImpl> list;
	
	override protected generateTemplate(Iterable<ListImpl> it) {
		var output = ""
		list = it.toList()
		
		for (listElement : list){
			var onSelectEvent = listElement.viewElementEvents.filter(OnSelectEventImpl).get(0)
			var dataBinding = listElement.viewComponentParts.get(0)
			var visualizationAttributes = dataBinding.subViewComponentParts.toList()
			
			output += '''
				<table id="«listElement.id»" name="«listElement.name»" class="table table-striped table-hover table-condensed">
					<thead>
			'''
			
			for(attribute : visualizationAttributes){
				output += '''
					<th>
						«attribute.name.toFirstUpper»
					</th>
				'''
			}
			
			output += '''
					</thead>
					<tbody>
						<tr *ngFor="let el of «dataBinding.name»" (click)="«onSelectEvent.name»()">
			'''
			
			for(attribute : visualizationAttributes){
				output += '''			
					<td>
						{{el.«attribute.name»}}
					</td>
				'''
			}			
			
			output += '''
						</tr>
					</tbody>
				</table>
			'''
		}
		
		return output
	}
	
	override protected prepareGeneration(Iterable<ListImpl> it) {
	}
	
}